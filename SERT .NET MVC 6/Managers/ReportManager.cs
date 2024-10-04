using SertWebApp.Interfaces;
using SertWebApp.Models;

namespace SertWebApp.Managers
{
    public class ReportManager(IReportRepository reportRepository, ILogger<ReportManager> logger) : IReportManager
    {
        private readonly IReportRepository _reportRepository = reportRepository;
        private readonly ILogger<ReportManager> _logger = logger;

        public ReportModel GetReportDetails(int id) => ConvertToModel(_reportRepository.Find(id));
        public List<ReportModel> GetAllReports()
        {
            try
            {
                var reportList = _reportRepository.FindAll();

                if (reportList is null || reportList.Count == 0)
                {
                    return new List<ReportModel>();
                }

                return reportList.Select(ConvertToModel).ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at ReportManager.GetAllReports()");
                return new List<ReportModel>();
            }
        }

        #region basic operations
        public void Upsert(ReportModel reportModel)
        {
            try
            {
                Report reportToUpsert = _reportRepository.Find(reportModel.Id)
                    ?? new Report();

                reportToUpsert.BuildingName = reportModel.BuildingName;
                reportToUpsert.LocationDetail = reportModel.LocationDetail;
                reportToUpsert.Content = reportModel.Content;
                reportToUpsert.Attachment = reportModel.Attachment;
                reportToUpsert.FileName = reportModel.FileName;
                reportToUpsert.FileType = reportModel.FileType;

                if (reportToUpsert.Id != 0)
                {
                    reportToUpsert.DateModified = DateTime.Now;
                }

                _reportRepository.Update(reportToUpsert);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at ReportManager.Upsert(...)");
            }
        }
        public void Delete(int id)
        {
            try
            {
                var reportToDelete = _reportRepository.Find(id);

                if (reportToDelete is null)
                {
                    return;
                }

                _reportRepository.Delete(reportToDelete);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at ReportManager.Delete(...)");
            }
        }
        #endregion

        #region static
        private static ReportModel ConvertToModel(Report? reportDetails)
        {
            var reportModel = new ReportModel() { Id = -1 };

            if (reportDetails is null)
            {
                reportModel.ErrorMessage = "Report not found";
                return reportModel;
            }

            return new ReportModel
            {
                Id = reportDetails.Id,
                BuildingName = reportDetails.BuildingName,
                LocationDetail = reportDetails.LocationDetail,
                Content = reportDetails.Content,
                Attachment = reportDetails.Attachment,
                FileName = reportDetails.FileName,
                FileType = reportDetails.FileType
            };
        }
        #endregion

    }
}
