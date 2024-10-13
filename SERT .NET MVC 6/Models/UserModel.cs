using SertWebApp.Enums;

namespace SertWebApp.Models
{
    public class UserModel
    {
        public required int Id { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Course { get; set; }
        public string Year { get; set; }
        public string Section { get; set; }
        public string? Email { get; set; } = string.Empty;
        public string Position { get; set; } = string.Empty;
        public Role Role { get; set; } = Role.User;
        public bool IsActive { get; set; } = true;
        public bool IsOnline { get; set; } = false;
        public string ErrorMessage { get; set; } = string.Empty;
    }
}
