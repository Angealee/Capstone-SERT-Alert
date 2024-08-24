namespace SertApi.DAL
{
    public class User
    {
        public int Id { get; set; }
        public required string Username { get; set; }
        public required string Password { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }

        /* 0 - User
         * 1 - Admin
         * 2 - 2nd Admin
         */
        public int Permission { get; set; } = 0;
        public bool IsOnline { get; set; } = false;

        public DateTime DateCreated { get; set; } = DateTime.Now;
        public DateTime? DateModified { get; set; }
    }
}