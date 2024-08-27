using Microsoft.AspNetCore.Mvc;
using SertApi.DAL;
using SertApi.Interfaces;
using SertApi.Models;
using SertApi.Repositories;

namespace SertApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SertReportController(ILogger<SertUserController> logger, ReportRepository reportRepository) : ControllerBase
    {
        private readonly ILogger<SertUserController> _logger = logger;
        private readonly IReportRepository _reportRepository = reportRepository;


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

        [HttpPost("AddReport")]
        public async Task<IActionResult> AddReport(ReportModel jsonModel)
        {
            try
            {
                var newReport = new Report
                {
                    BuildingName = jsonModel.BuildingName,
                    LocationDetail = jsonModel.LocationDetail,
                    Content = jsonModel.Content,
                    Attachment = jsonModel.Attachment,
                    DateCreated = DateTime.Now
                };

                await _reportRepository.Add(newReport);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in AddUser()");
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("UpdateReport")]
        public async Task<IActionResult> UpdateReport(ReportModel jsonModel)
        {
            try
            {
                var report = await _reportRepository.Find(jsonModel.Id);
                if (report == null)
                {
                    return NotFound();
                }

                report.BuildingName = jsonModel.BuildingName;
                report.Content = jsonModel.Content;
                report.Attachment = jsonModel.Attachment;
                report.DateModified = DateTime.Now;

                await _reportRepository.Update(report);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in UpdateReport()");
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("DeleteReport")]
        public async Task<IActionResult> DeleteReport(ReportModel jsonModel)
        {
            try
            {
                var report = await _reportRepository.Find(jsonModel.Id);
                if (report == null)
                {
                    return NotFound();
                }

                // This is "hard delete" as reports are not sensitive
                await _reportRepository.Delete(report);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in DeleteReport()");
                return StatusCode(500, ex.Message);
            }
        }
        #endregion
    }
}
