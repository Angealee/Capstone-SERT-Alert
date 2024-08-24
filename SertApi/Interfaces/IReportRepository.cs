using SertApi.DAL;

namespace SertApi.Interfaces
{
    public interface IReportRepository
    {
        public Task<Report> Find(int id);
        public Task<Report> FindByLocationName(string location);
        public Task<Report> FindByBuildingName(string building);
        public Task<Report> FindByReporterName(string reporter);
        public Task<List<Report>> FindAll();
        public Task Add(Report user);
        public Task Update(Report user);
        public Task Delete(Report user);
    }
}
