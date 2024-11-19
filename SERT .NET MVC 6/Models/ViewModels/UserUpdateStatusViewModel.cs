using System.Text.Json.Serialization;

namespace SertWebApp.Models.ViewModels
{
    public class UserUpdateStatusViewModel
    {
        [JsonPropertyName("userId")]
        public int UserId { get; set; }
        [JsonPropertyName("status")]
        public bool IsOnline { get; set; }
    }
}
