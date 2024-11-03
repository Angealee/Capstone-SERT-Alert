namespace SertWebApp.Models
{
    public class ReportModel
    {
        public int Id { get; set; }
        public string BuildingName { get; set; }
        public string LocationDetail { get; set; }
        public string Content { get; set; }
        public byte[]? Attachment { get; set; }
        public string? FileName { get; set; }
        public string? FileType { get; set; }
        public DateTime DateCreated { get; set; }
        public string ErrorMessage { get; set; } = string.Empty;
    }
}
