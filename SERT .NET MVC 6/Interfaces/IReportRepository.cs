using SertWebApp.Models;

namespace SertWebApp.Interfaces
{
    public interface IReportRepository
    {
        public Report Find(int id);
        public Report FindByLocationName(string location);
        public Report FindByBuildingName(string building);
        public List<Report> FindAll();
        public void Add(Report report);
        public void Update(Report report);
        public void Delete(Report report);
    }
}
