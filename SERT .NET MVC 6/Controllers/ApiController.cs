using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SertWebApp.Enums;
using SertWebApp.Interfaces;
using SertWebApp.Models;
using SertWebApp.Models.ViewModels;

namespace SertWebApp.Controllers
{
    public class ApiController(ILogger<LoginController> logger, 
                                IUserManager userManager,
                                IReportManager reportManager,
                                ISessionService sessionService)
    {
        private readonly ILogger<LoginController> _logger = logger;
        private readonly IUserManager _userManager = userManager;
        private readonly IReportManager _reportManager = reportManager;
        private readonly ISessionService _sessionService = sessionService;

        //public IActionResult Index()
        //{
        //    return View();
        //}

        [HttpPost]
        public string Login([FromBody] LoginViewModel model) => JsonConvert.SerializeObject(_userManager.ApiLogin(model.Username, model.Password));

        [HttpGet]
        public string GetReportList() 
        {
            var reports = _reportManager.GetAllReports();
            var reportViewModels = ConvertToViewModel(reports);
            return JsonConvert.SerializeObject(reportViewModels);
        }

        [HttpPost]
        public string AddReport([FromBody] ApiReportViewModel model)
        {
            try
            {
                byte[]? imageBytes = null;

                if (!string.IsNullOrEmpty(model.Image))
                {
                    imageBytes = Convert.FromBase64String(model.Image);
                }

                var reportModel = new ReportModel
                {
                    BuildingName = model.Building,
                    LocationDetail = model.FloorLocation,
                    Content = model.Context,
                    Attachment = imageBytes,
                    FileName = model.FileName,
                    FileType = model.FileType,
                    DateCreated = DateTime.Now
                };

                _reportManager.Upsert(reportModel);

                return JsonConvert.SerializeObject(true);
            }
            catch
            {
                return JsonConvert.SerializeObject(false);
            }
        }

        private List<ApiReportViewModel> ConvertToViewModel(List<ReportModel> reports)
        {
            var reportViewModels = new List<ApiReportViewModel>();

            foreach (var report in reports)
            {
                reportViewModels.Add(new ApiReportViewModel
                {
                    Building = report.BuildingName,
                    FloorLocation = report.LocationDetail,
                    Context = report.Content,
                    Image = report.Attachment != null ? Convert.ToBase64String(report.Attachment) : string.Empty,
                    FileName = report.FileName,
                    FileType = report.FileType,
                    Timestamp = report.DateCreated // Map DateCreated to Timestamp
                });
            }

            return reportViewModels;
        }
    }
}
