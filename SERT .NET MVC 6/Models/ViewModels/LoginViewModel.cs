using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace SertWebApp.Models.ViewModels
{
    public class LoginViewModel
    {
        [JsonPropertyName("username")]
        public string Username { get; set; }
        [JsonPropertyName("password")]
        public string Password { get; set; }
    }
}
