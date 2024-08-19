using SertApi.DAL;

namespace SertApi.Interfaces
{
    public interface IReportRepository
    {
        public Task<Report> FindByLocationName(string location);
        public Task<Report> FindByBuildingName(string building);
        public Task<Report> FindByReporterName(string reporter);
        public Task<List<Report>> FindAll();
    }
}
