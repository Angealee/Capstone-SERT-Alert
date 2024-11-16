namespace SertWebApp.Models;

public partial class Report
{
    public int Id { get; set; }

    public string BuildingName { get; set; } = null!;

    public string LocationDetail { get; set; } = null!;

    public string Content { get; set; } = null!;

    public byte[]? Attachment { get; set; } = null!;
    public string? FileName { get; set; } = null!;
    public string? FileType { get; set; } = null!;

    public DateTime DateCreated { get; set; } = DateTime.Now;

    public DateTime? DateModified { get; set; } = null!;
}
