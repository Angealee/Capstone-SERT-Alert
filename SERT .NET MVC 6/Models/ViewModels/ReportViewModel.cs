using SertWebApp.Enums;
using System.ComponentModel.DataAnnotations;

namespace SertWebApp.Models.ViewModels
{
    public class ReportViewModel
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Building Name is required")]
        public string BuildingName { get; set; }
        [Required(ErrorMessage = "Location Detail is required")]
        public string LocationDetail { get; set; }
        [Required(ErrorMessage = "Content is required")]
        public string Content { get; set; }
        public byte[]? Attachment { get; set; }
        public string? FileName { get; set; }
        public string? FileType { get; set; }
        public PageMode PageMode { get; set; } = PageMode.View;
    }
}
