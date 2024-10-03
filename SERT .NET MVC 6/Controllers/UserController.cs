using Microsoft.AspNetCore.Mvc;
using SertWebApp.Enums;
using SertWebApp.Interfaces;
using SertWebApp.Models;
using SertWebApp.Models.ViewModels;

namespace SertWebApp.Controllers
{
    public class UserController(ILogger<UserController> logger, IUserManager userManager, ISessionService sessionService) : BaseController(sessionService)
    {
        private readonly ILogger<UserController> _logger = logger;
        private readonly IUserManager _userManager = userManager;
        private readonly ISessionService _sessionService = sessionService;

        public IActionResult UserList() => View("UserList");

        public IActionResult AdminList() => View("AdminList");

        private UserModel GetDetails(int id) => _userManager.GetUserDetails(id);

        #region CRUD
        [HttpGet]
        public IActionResult Add(bool isAdmin) => PartialView("_UserDetailsPartial", new UserViewModel { PageMode = PageMode.Add, IsAdmin = isAdmin });

        [HttpGet]
        public IActionResult Edit(int id, bool isAdmin)
        {
            try
            {
                var user = GetDetails(id);
                if (user == null || !string.IsNullOrEmpty(user.ErrorMessage))
                {
                    return NotFound();
                }

                var viewModel = ConvertToViewModel(user);
                viewModel.PageMode = PageMode.Update;
                viewModel.IsAdmin = isAdmin;

                return PartialView("_UserDetailsPartial", viewModel);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at UserController.Edit(...)");
                return StatusCode(500, ex.Message);
            }
            
        }

        [HttpGet]
        public IActionResult Delete(int id, bool isAdmin)
        {
            try
            {
                var user = GetDetails(id);
                if (user == null || !string.IsNullOrEmpty(user.ErrorMessage))
                {
                    return NotFound();
                }

                var viewModel = ConvertToViewModel(user);
                viewModel.PageMode = PageMode.Delete;
                viewModel.IsAdmin = isAdmin;

                return PartialView("_UserDetailsPartial", viewModel);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at UserController.Edit(...)");
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        public IActionResult ChangePassword(int id, bool isAdmin)
        {
            try
            {
                var user = GetDetails(id);
                if (user == null || !string.IsNullOrEmpty(user.ErrorMessage))
                {
                    return NotFound();
                }

                var viewModel = new ChangePasswordViewModel()
                {
                    Id = id,
                    CurrentPassword = user.Password
                };

                return PartialView("_ChangePasswordPartial", viewModel);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at UserController.Edit(...)");
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        public IActionResult ChangePassword(ChangePasswordViewModel viewModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var user = GetDetails(viewModel.Id);
                    if (user == null || !string.IsNullOrEmpty(user.ErrorMessage))
                    {
                        return NotFound();
                    }

                    if (!_userManager.VerifyPassword(viewModel.Id, viewModel.CurrentPassword))
                    {
                        return StatusCode(409, "Current password is incorrect.");
                    }

                    if (viewModel.NewPassword != viewModel.ConfirmPassword)
                    {
                        return StatusCode(409, "New password and confirm password does not match.");
                    }

                    user.Password = viewModel.NewPassword;
                    _userManager.ChangePassword(viewModel.Id, viewModel.NewPassword);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at UserController.ChangePassword(...)");
                return StatusCode(500, ex.Message);
            }

            return PartialView("_ChangePasswordPartial", viewModel);
        }

        [HttpPost]
        public IActionResult Save(UserViewModel viewModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (viewModel.PageMode == PageMode.Delete)
                    {
                        _userManager.Delete(viewModel.Id);
                    }
                    else
                    {
                        if (CheckIfUserAlreadyExists(viewModel))
                        {
                            return StatusCode(409, "Username already exists.");
                        }

                        var user = new UserModel
                        {
                            Id = viewModel.Id,
                            Username = viewModel.Username,
                            Name = viewModel.Name,
                            Course = viewModel.Course ?? string.Empty,
                            Year = viewModel.Year ?? string.Empty,
                            Section = viewModel.Section ?? string.Empty,
                            Email = viewModel.Email,
                            Position = viewModel.Position ?? string.Empty,
                            Role = viewModel.Role
                        };

                        if (viewModel.PageMode == PageMode.Add)
                        {
                            user.Password = viewModel.Password;
                        }

                        _userManager.Upsert(user);
                    }
                } 
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at UserController.Save(...)");
                return StatusCode(500, ex.Message);
            }

            return PartialView("_UserDetailsPartial", viewModel);
        }
        #endregion

        #region Logic Validation
        private bool CheckIfUserAlreadyExists(UserViewModel viewModel)
        {
            if (viewModel.PageMode == PageMode.Update)
            {
                var existingUser = _userManager.GetUserDetails(viewModel.Id);
                if (existingUser == null || existingUser?.Username == viewModel.Username)
                {
                    return false;
                }
            }

            return _userManager.IsUserAlreadyExists(viewModel.Username);
        }
        #endregion

        #region DataTables
        [HttpPost]
        public IActionResult GetData([FromForm] DataTableParameters parameters)
        {
            var currentUserRole = _sessionService.GetCurrentUser().Role;
            var currentUserId = _sessionService.GetCurrentUser().Id;

            try
            {
                List<UserModel> allUsers = null!;

                // TODO: Refactor to remove the `isAdmin` parameter and just base it on the current user role
                if (parameters.isAdmin)
                {
                    allUsers = _userManager.GetAllAdmins(currentUserRole);
                }
                else
                {
                    allUsers = _userManager.GetAllUsers();
                }


                // Search Filter
                if (!string.IsNullOrEmpty(parameters.Search.Value))
                {
                    var searchValue = parameters.Search.Value.ToLower();
                    allUsers = allUsers.Where(u => (u.Username != null && u.Username.Contains(searchValue))
                                                    || (u.Name != null && u.Name.Contains(searchValue))
                                                    || (u.Email != null && u.Email.Contains(searchValue))
                                                    || (u.Course != null && u.Course.Trim().Contains(searchValue, StringComparison.CurrentCultureIgnoreCase))
                                                    || (u.Section != null && u.Section.Trim().Contains(searchValue, StringComparison.CurrentCultureIgnoreCase))
                                                    || (u.Year != null && u.Year.Trim().Contains(searchValue, StringComparison.CurrentCultureIgnoreCase))
                                                    || (u.Position != null && u.Position.Trim().Contains(searchValue, StringComparison.CurrentCultureIgnoreCase))
                                                    || u.Role.ToString().Contains(searchValue, StringComparison.CurrentCultureIgnoreCase)).ToList();
                }


                // Sort Column
                var order = parameters?.Order?[0] ?? null;
                var sortDirection = order?.Dir ?? "asc";
                var sortColumn = parameters?.Columns[order?.Column ?? 0]?.Data ?? string.Empty;
                Func<UserModel, object> orderByFunc = x => x.Username; // default

                if (sortColumn?.Equals("Name", StringComparison.CurrentCultureIgnoreCase) ?? false)
                    orderByFunc = (x => x.Name ?? string.Empty);
                if (sortColumn?.Equals("Course", StringComparison.CurrentCultureIgnoreCase) ?? false)
                    orderByFunc = (x => x.Course ?? string.Empty);
                if (sortColumn?.Equals("Year", StringComparison.CurrentCultureIgnoreCase) ?? false)
                    orderByFunc = (x => x.Year ?? string.Empty);
                if (sortColumn?.Equals("Section", StringComparison.CurrentCultureIgnoreCase) ?? false)
                    orderByFunc = (x => x.Section ?? string.Empty);
                if (sortColumn?.Equals("Email", StringComparison.CurrentCultureIgnoreCase) ?? false)
                    orderByFunc = (x => x.Email ?? string.Empty);
                if (sortColumn?.Equals("Position", StringComparison.CurrentCultureIgnoreCase) ?? false)
                    orderByFunc = (x => x.Position ?? string.Empty);
                if (sortColumn?.Equals("Role", StringComparison.CurrentCultureIgnoreCase) ?? false)
                    orderByFunc = (x => x.Role.ToString());

                // Apply pagination
                var totalRecords = allUsers.Count;
                var currentIndex = (((parameters?.Start ?? 0) - 1) * (parameters?.Length ?? 0));
                if (currentIndex <= 0 || (totalRecords > 0 && currentIndex >= totalRecords))
                    currentIndex = 0; // safe checking;

                var filteredUsers = allUsers;

                if (parameters?.Length > -1)
                {
                    filteredUsers = filteredUsers.Skip(currentIndex).Take(parameters?.Length ?? 0).ToList();
                }

                // Order results
                if (sortDirection.Equals("asc", StringComparison.CurrentCultureIgnoreCase))
                    filteredUsers = filteredUsers.OrderBy(orderByFunc).ToList();
                else
                    filteredUsers = filteredUsers.OrderByDescending(orderByFunc).ToList();

                var data = filteredUsers.Select(ConvertToViewModel).ToList();

                var result = new
                {
                    draw = parameters?.Draw ?? 0,
                    recordsTotal = totalRecords,
                    recordsFiltered = filteredUsers.Count,
                    data,
                    currentUserRole,
                    currentUserId
                };

                return Json(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error fetching user list.");
                return StatusCode(500, ex.Message);
            }
        }

        private UserViewModel ConvertToViewModel(UserModel userModel)
        {
            return new UserViewModel
            {
                Id = userModel.Id,
                Username = userModel.Username,
                Name = userModel.Name,
                Password = userModel.Password,
                Course = userModel.Course,
                Year = userModel.Year,
                Section = userModel.Section,
                Email = userModel.Email,
                Position = userModel.Position,
                Role = userModel.Role,
                IsOnline = userModel.IsOnline,
                IsActive = userModel.IsActive,
            };
        }
        #endregion
    }
}
