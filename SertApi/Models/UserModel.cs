using Newtonsoft.Json;

namespace SertApi.Models
{
    public class UserModel
    {
        [JsonProperty("username")]
        public string Username { get; set; } = string.Empty;

        [JsonProperty("password")]
        public string Password { get; set; } = string.Empty;

        [JsonProperty("firstname")]
        public string FirstName { get; set; } = string.Empty;

        [JsonProperty("lastname")]
        public string LastName { get; set; } = string.Empty;

        [JsonProperty("permission")]
        public int Permission { get; set; } = 0;
    }
}
