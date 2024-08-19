namespace SertApi.DAL
{
    public class Report
    {
        public int Id { get; set; }
        public string LocationName { get; set; } = string.Empty;
        public string BuildingName { get; set; } = string.Empty;
        public string ReportedBy { get; set; } = string.Empty;
        public string? Notes { get; set; }
        public DateTime DateCreated { get; set; } = DateTime.Now;
        public DateTime DateModified { get; set; }
    }
}