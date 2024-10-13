using Microsoft.AspNetCore.Mvc;
using SertWebApp.Interfaces;
using SertWebApp.Models.ViewModels;
using System.Diagnostics;

namespace SertWebApp.Controllers
{
    public class LoginController(ILogger<LoginController> logger, IUserManager userManager, ISessionService sessionService) : BaseController(sessionService)
    {
        private readonly ILogger<LoginController> _logger = logger;
        private readonly IUserManager _userManager = userManager;
        private readonly ISessionService _sessionService = sessionService;

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = _userManager.Login(model.Username, model.Password);

                if (user is not null && string.IsNullOrEmpty(user.ErrorMessage))
                {
                    user.Password = string.Empty; // temporary clear password
                    _userManager.UpdateStatus(user.Id, true);
                    _sessionService.SetCurrentUser(user);
                    return RedirectToAction("Index", "Home");
                }

                ModelState.AddModelError(string.Empty, user?.ErrorMessage
                                                            ?? "Error occurred during login. Please try again later.");

            }

            return View();
        }

        public IActionResult Logout()
        {
            var currentUser = _sessionService.GetCurrentUser();
            if (currentUser.Id > 0)
            {
                _userManager.UpdateStatus(currentUser.Id, false);
            }
            _sessionService.ClearSession();
            return RedirectToAction("Index");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
