using Microsoft.AspNetCore.Mvc;
using SertWebApp.Enums;
using SertWebApp.Interfaces;
using SertWebApp.Models;
using SertWebApp.Services;

namespace SertWebApp.Managers
{
    public class UserManager(IUserRepository userRepository, ILogger<UserManager> logger) : IUserManager
    {
        private readonly IUserRepository _userRepository = userRepository;
        private readonly ILogger<UserManager> _logger = logger;

        public UserModel Find(int id)
        {
            try
            {
                var user = _userRepository.Find(id);
                return ConvertToModel(user);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at UserManager.Find(...)");

                return new UserModel() { Id = -1 };
            }
        }

        public UserModel Login(string username, string password)
        {
            try
            {
                var encryptedPassword = CryptographyService.EncryptPassword(password);
                var user = _userRepository.FindByUsernameAndPassword(username, encryptedPassword);
                return ConvertToModel(user);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at UserManager.Login(...)");
                return new UserModel() { Id = -1 };
            }
        }

        public UserModel GetUserByUsernameAndPassword(string username, string password)
        {
            try
            {
                var user = _userRepository.FindByUsernameAndPassword(username, password);
                return ConvertToModel(user);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at UserManager.GetUserByUsernameAndPassword(...)");
                return new UserModel() { Id = -1 };
            }
        }

        public UserModel GetUserDetails(int id) => ConvertToModel(_userRepository.Find(id));
        public List<UserModel> GetAllUsers()
        {
            try
            {
                var userList = _userRepository.FindAllUsers();

                if (userList is null || userList.Count == 0)
                {
                    return new List<UserModel>();
                }

                return userList.Select(ConvertToModel).ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at UserManager.GetAllUsers()");
                return new List<UserModel>();
            }
        }

        public List<UserModel> GetAllAdmins(Role currentUserRole)
        {
            try
            {
                var adminList = _userRepository.FindAllAdmins(currentUserRole);

                if (adminList is null || adminList.Count == 0)
                {
                    return new List<UserModel>();
                }

                return adminList.Select(ConvertToModel).ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at AdminManager.GetAllAdmins()");
                return new List<UserModel>();
            }
        }

        public void Upsert(UserModel userModel)
        {
            try
            {
                User userToUpsert = _userRepository.Find(userModel.Id)
                    ?? new User();

                userToUpsert.Username = userModel.Username;
                userToUpsert.Name = userModel.Name;
                userToUpsert.Course = userModel.Course;
                userToUpsert.Year = userModel.Year;
                userToUpsert.Section = userModel.Section;
                userToUpsert.Email = userModel.Email;
                userToUpsert.Position = userModel.Position;
                userToUpsert.Role = userModel.Role;
                userToUpsert.IsActive = userModel.IsActive;
                userToUpsert.IsOnline = userModel.IsOnline;

                if (userToUpsert.Id != 0)
                {
                    userToUpsert.DateModified = DateTime.Now;
                }

                _userRepository.Update(userToUpsert);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at UserManager.Upsert(...)");
            }
        }

        public void Delete(int id)
        {
            try
            {
                var userToDelete = _userRepository.Find(id);

                if (userToDelete is null)
                {
                    return;
                }

                userToDelete.IsActive = false; // soft delete for now
                userToDelete.DateModified = DateTime.Now;

                _userRepository.Update(userToDelete);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at UserManager.Delete(...)");
            }
        }

        public bool IsUserAlreadyExists(string username) => _userRepository.IsUserExists(username);

        public void UpdateStatus(int id, bool status)
        {
            try
            {
                var user = _userRepository.Find(id);

                if (user is null)
                {
                    return;
                }

                user.IsOnline = status;
                user.DateModified = DateTime.Now;

                _userRepository.Update(user);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at UserManager.Delete(...)");
            }
        }

        public bool VerifyPassword(int id, string enteredPassword)
        {
            var user = _userRepository.Find(id);
            return CryptographyService.VerifyPassword(enteredPassword, user.Password);
        }

        public void ChangePassword(int id, string newPassword)
        {
            try
            {
                var user = _userRepository.Find(id);

                if (user is null)
                {
                    return;
                }

                user.Password = newPassword;
                user.DateModified = DateTime.Now;

                _userRepository.Update(user);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at UserManager.ChangePassword(...)");
            }
        }

        #region static
        private static UserModel ConvertToModel(User? userDetails)
        {
            var userModel = new UserModel() { Id = -1 };

            if (userDetails is null)
            {
                userModel.ErrorMessage = "User not found";
                return userModel;
            }

            userModel.Id = userDetails.Id;
            userModel.Username = userDetails.Username;
            userModel.Password = userDetails.Password;
            userModel.Name = userDetails.Name;
            userModel.Course = userDetails.Course;
            userModel.Year = userDetails.Year;
            userModel.Section = userDetails.Section;
            userModel.Email = userDetails.Email;
            userModel.Position = userDetails.Position ?? string.Empty;
            userModel.Role = userDetails.Role;
            userModel.IsActive = userDetails.IsActive;
            userModel.IsOnline = userDetails.IsOnline;

            return userModel;
        }
        #endregion
    }
}
