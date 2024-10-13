using SertWebApp.Interfaces;
using SertWebApp.Models;

namespace SertWebApp.Repositories
{
    public class ReportRepository(SertSchemaContext context) : IReportRepository
    {
        private readonly SertSchemaContext _context = context;

        #region List Search
        public List<Report> FindAll()
        {
            return _context.Reports.ToList()
                ?? new List<Report>();
        }
        #endregion

        #region Single Search
        public Report Find(int id)
        {
            return _context.Reports.FirstOrDefault(r => r.Id == id)
                ?? new Report();
        }

        public Report FindByLocationName(string location)
        {
            return _context.Reports.FirstOrDefault(r => r.LocationDetail.Trim().Equals(location.Trim(), StringComparison.CurrentCultureIgnoreCase))
                ?? new Report();
        }

        public Report FindByBuildingName(string building)
        {
            return _context.Reports.FirstOrDefault(r => r.BuildingName.Trim().Equals(building.Trim(), StringComparison.CurrentCultureIgnoreCase))
                ?? new Report();
        }
        #endregion

        #region basic operations
        public void Add(Report report)
        {
            ArgumentNullException.ThrowIfNull(report);

            try
            {
                _context.Reports.Add(report);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Update(Report report)
        {
            ArgumentNullException.ThrowIfNull(report);

            try
            {
                _context.Reports.Update(report);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Delete(Report report)
        {
            ArgumentNullException.ThrowIfNull(report);

            try
            {
                _context.Reports.Remove(report);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        #endregion
    }
}
