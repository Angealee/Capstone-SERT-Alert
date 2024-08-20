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

        public async Task<Report> FindByLocationName(string location)
        {
            return await _context.Reports.FirstOrDefaultAsync(u => u.LocationName == location)
                ?? new Report();
        }

        public async Task<Report> FindByBuildingName(string building)
        {
            return await _context.Reports.FirstOrDefaultAsync(u => u.BuildingName == building)
                ?? new Report();
        }

        public async Task<Report> FindByReporterName(string reporter)
        {
            return await _context.Reports.FirstOrDefaultAsync(u => u.BuildingName == reporter)
                ?? new Report();
        }

        public async Task<List<Report>> FindAll()
        {
            return await _context.Reports.ToListAsync()
                ?? new List<Report>();
        }
    }
}
