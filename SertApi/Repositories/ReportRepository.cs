using Microsoft.EntityFrameworkCore;
using SertApi.DAL;
using SertApi.Interfaces;

namespace SertApi.Repositories
{
    public class ReportRepository : IReportRepository
    {
        private readonly ApplicationDbContext _context;

        public ReportRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Report> Find(int id)
        {
            return await _context.Reports.FirstOrDefaultAsync(r => r.Id == id)
                ?? throw new Exception("Report not found");
        }

        public async Task<List<Report>> FindAll()
        {
            return await _context.Reports.ToListAsync()
                ?? new List<Report>();
        }

        public async Task<Report> FindByLocationName(string location)
        {
            return await _context.Reports.FirstOrDefaultAsync(r => r.LocationDetail.Trim().Equals(location.Trim(), StringComparison.CurrentCultureIgnoreCase))
                ?? throw new Exception("Report not found");
        }

        public async Task<Report> FindByBuildingName(string building)
        {
            return await _context.Reports.FirstOrDefaultAsync(r => r.BuildingName.Trim().Equals(building.Trim(), StringComparison.CurrentCultureIgnoreCase))
                ?? throw new Exception("Report not found");
        }

        #region basic operations
        public async Task Add(Report report)
        {
            ArgumentNullException.ThrowIfNull(report);

            try
            {
                _context.Reports.Add(report);
                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task Update(Report report)
        {
            ArgumentNullException.ThrowIfNull(report);

            try
            {
                _context.Reports.Update(report);
                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task Delete(Report report)
        {
            ArgumentNullException.ThrowIfNull(report);

            try
            {
                _context.Reports.Remove(report);
                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        #endregion
    }
}
