using Newtonsoft.Json;

namespace SertWebApp.Models.ViewModels
{
    public class ApiReportViewModel
    {
        [JsonProperty("building")]
        public string Building { get; set; }

        [JsonProperty("floorLocation")]
        public string FloorLocation { get; set; }

        [JsonProperty("context")]
        public string Context { get; set; }

        [JsonProperty("image")]
        public string Image { get; set; } // Base64-encoded string

        [JsonProperty("fileName")]
        public string FileName { get; set; } // File name

        [JsonProperty("fileType")]
        public string FileType { get; set; } // File types

        public DateTime Timestamp { get; set; } // Add Timestamp property
    }
}
