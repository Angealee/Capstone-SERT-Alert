using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using SertWebApp.Interfaces;

namespace SertWebApp.Controllers
{
    public class BaseController(ISessionService sessionService) : Controller
    {
        private readonly ISessionService _sessionService = sessionService;

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var currentAction = context.ActionDescriptor.RouteValues["action"];
            var currentController = context.ActionDescriptor.RouteValues["controller"];

            // Check if the current action is not the Login action
            if (currentController != "Login" && (currentAction != "Index" || currentAction != "Login"))
            {
                var currentUser = _sessionService.GetCurrentUser();
                if (currentUser.Id == -1 || !string.IsNullOrEmpty(currentUser.ErrorMessage))
                {
                    context.Result = RedirectToAction("Index", "Login");
                }
                else
                {
                    ViewBag.UserDetails = currentUser;
                }
            }

            base.OnActionExecuting(context);
        }
    }
}
