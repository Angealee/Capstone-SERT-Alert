using Microsoft.AspNetCore.Mvc;
using SertApi.DAL;
using SertApi.Interfaces;
using SertApi.Repositories;

namespace SertApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SertController(ILogger<SertController> logger, UserRepository userRepository, ReportRepository reportRepository) : ControllerBase
    {
        private readonly ILogger<SertController> _logger = logger;
        private readonly IUserRepository _userRepository = userRepository;
        private readonly IReportRepository _reportRepository = reportRepository;


        #region Users
        [HttpGet("GetUserByUsername")]
        public async Task<IActionResult> GetUserByUsername(string username)
        {
            try
            {
                var user = await _userRepository.FindByUsername(username);
                if (user == null)
                {
                    return NotFound();
                }
                return Ok(user);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in GetUserByUsername()");
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("IsUserOnline")]
        public async Task<bool> IsUserOnline(string username)
        {
            try
            {
                return await _userRepository.IsUserOnline(username);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in IsUserOnline()");
                return false;
            }
        }
        #endregion

        #region Reports
        [HttpGet("GetAllReports")]
        public async Task<List<Report>> GetAllReports()
        {
            try
            {
                return await _reportRepository.FindAll();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in GetAllReports()");
                return new List<Report>();
            }
        }

        [HttpGet("GetReportByLocation")]
        public async Task<IActionResult> GetReportByLocation(string location)
        {
            try
            {
                var report = await _reportRepository.FindByLocationName(location);
                if (report == null)
                {
                    return NotFound();
                }
                return Ok(report);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in GetReportByLocation()");
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetReportByBuilding")]
        public async Task<IActionResult> GetReportByBuilding(string building)
        {
            try
            {
                var report = await _reportRepository.FindByBuildingName(building);
                if (report == null)
                {
                    return NotFound();
                }
                return Ok(report);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in GetReportByBuilding()");
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetReportByReporter")]
        public async Task<IActionResult> GetReportByReporter(string reporter)
        {
            try
            {
                var report = await _reportRepository.FindByReporterName(reporter);
                if (report == null)
                {
                    return NotFound();
                }
                return Ok(report);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in GetReportByReporter()");
                return StatusCode(500, ex.Message);
            }
        }
        #endregion
    }
}
