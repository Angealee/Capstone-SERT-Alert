using Microsoft.AspNetCore.Mvc;
using SertWebApp.Interfaces;
using SertWebApp.Models.ViewModels;
using System.Diagnostics;

namespace SertWebApp.Controllers
{
    public class HomeController(ILogger<HomeController> logger, ISessionService sessionService) : BaseController(sessionService)
    {
        private readonly ILogger<HomeController> _logger = logger;
        //private readonly ISessionService _sessionService = sessionService;

        public IActionResult Index()
        {
            return View();
        }

        //public IActionResult Privacy()
        //{
        //    return View();
        //}

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
