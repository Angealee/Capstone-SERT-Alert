using Newtonsoft.Json;

namespace SertApi.Models
{
    public class ReportModel
    {
        [JsonProperty("reportId")]
        public required int Id { get; set; }

        [JsonProperty("building")]
        public required string BuildingName { get; set; }

        [JsonProperty("location")]
        public string LocationDetail { get; set; } = string.Empty;

        [JsonProperty("reporter")]
        public required string ReportedBy { get; set; }

        [JsonProperty("content")]
        public required string Content { get; set; }

        [JsonProperty("attachment")]
        public byte[]? Attachment { get; set; }
    }
}
