using Newtonsoft.Json;

namespace SertApi.Models
{
    public class UserModel
    {
        [JsonProperty("username")]
        public string Username { get; set; } = string.Empty;
        
        [JsonProperty("name")]
        public string Name { get; set; } = string.Empty;

        [JsonProperty("password")]
        public string Password { get; set; } = string.Empty;

        [JsonProperty("permission")]
        public int Permission { get; set; } = 0;

        [JsonProperty("email")]
        public string Email { get; set; } = string.Empty;

        [JsonProperty("position")]
        public string Position { get; set; } = string.Empty;

        [JsonProperty("coursesection")]
        public string CourseSection { get; set; } = string.Empty;
    }
}
