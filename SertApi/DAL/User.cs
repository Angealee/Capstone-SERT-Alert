namespace SertApi.DAL
{
    public class User
    {
        public int Id { get; set; }
        public required string Username { get; set; }
        public required string Password { get; set; }
        public string? Firstname { get; set; }
        public string? LastName { get; set; }
        public int Permission { get; set; } = 0;
        public bool IsOnline { get; set; } = false;

        public DateTime DateCreated { get; set; } = DateTime.Now;
        public DateTime DateModified { get; set; }
    }
}