namespace SertApi.DAL
{
    public class User
    {
        public int Id { get; set; }
        public required string Username { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Position { get; set; }
        public required string CourseSection { get; set; }
        public required string Password { get; set; }

        /* 0 - User
         * 1 - Admin
         * 2 - 2nd Admin
         */
        public int Permission { get; set; } = 0;
        public bool IsOnline { get; set; } = false;

        public DateTime? CreatedAt { get; set; } = DateTime.Now;
        public DateTime? UpdatedAt { get; set; }
    }
}