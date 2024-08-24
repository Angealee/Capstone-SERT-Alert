using Newtonsoft.Json;
using SertApi.Enums;

namespace SertApi.Models
{
    public class UserModel
    {
        [JsonProperty("userId")]
        public required int Id { get; set; }

        [JsonProperty("username")]
        public required string Username { get; set; }

        [JsonProperty("password")]
        public required string Password { get; set; }

        [JsonProperty("name")]
        public required string Name { get; set; }

        [JsonProperty("course")]
        public required string Course { get; set; }

        [JsonProperty("year")]
        public required string Year { get; set; }

        [JsonProperty("section")]
        public required string Section { get; set; }

        [JsonProperty("email")]
        public string? Email { get; set; } = string.Empty;

        [JsonProperty("position")]
        public string Position { get; set; } = string.Empty;

        [JsonProperty("role")]
        public required Role Role { get; set; } = Role.User;

        [JsonProperty("active")]
        public bool IsActive { get; set; } = true;

        [JsonProperty("online")]
        public bool IsOnline { get; set; } = false;
    }
}
