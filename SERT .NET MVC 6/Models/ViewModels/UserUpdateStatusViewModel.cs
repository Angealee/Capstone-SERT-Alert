using System.Text.Json.Serialization;

namespace SertWebApp.Models.ViewModels
{
    public class UserUpdateStatusViewModel
    {
        [JsonPropertyName("username")]
        public string Username { get; set; }
        [JsonPropertyName("status")]
        public bool IsOnline { get; set; }
    }
}
