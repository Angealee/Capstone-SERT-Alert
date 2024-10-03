using SertWebApp.Models;

namespace SertWebApp.Interfaces
{
    public interface IReportManager
    {
        ReportModel GetReportDetails(int id);
        List<ReportModel> GetAllReports();
        void Upsert(ReportModel reportModel);
        void Delete(int id);
    }
}
