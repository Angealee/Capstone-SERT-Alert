using SertApi.Enums;

namespace SertApi.DAL
{
    public class User
    {
        public int Id { get; set; }
        public required string Username { get; set; }
        public required string Password { get; set; }
        public required string Name { get; set; }
        public required string Course { get; set; }
        public required string Year { get; set; }
        public required string Section { get; set; }
        public string? Email { get; set; }
        public string? Position { get; set; }
        public Role Role { get; set; } = 0;
        public bool IsActive { get; set; } = true;
        public bool IsOnline { get; set; } = false;

        // audit fields
        public DateTime DateCreated { get; set; } = DateTime.Now;
        public DateTime? DateModified { get; set; }
    }
}