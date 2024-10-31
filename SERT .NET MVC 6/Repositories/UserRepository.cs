using SertWebApp.Enums;
using SertWebApp.Interfaces;
using SertWebApp.Models;

namespace SertWebApp.Repositories
{
    public class UserRepository(SertSchemaContext context) : IUserRepository
    {
        private readonly SertSchemaContext _context = context;

        #region List Search
        public List<User> FindAll(Role currentUserRole)
        {
            var result = new List<User>();

            if (currentUserRole == Role.Admin)
            {
                result = _context.Users.ToList();
            }
            else
            {
                result = _context.Users.Where(u => u.Role == Role.User || u.Role == Role.Admin2).ToList();
            }

            return result;
        }
            

        public List<User> FindAllUsers() 
            => _context.Users.Where(u => u.IsActive && u.Role == Enums.Role.User).ToList() ?? new List<User>();

        public List<User> FindAllAdmins(Role currentUserRole)
        {
            var result = new List<User>();

            if (currentUserRole == Role.Admin)
            {
                result = _context.Users
                            .Where(u => u.IsActive 
                                    && (u.Role == Role.Admin 
                                        || u.Role == Role.Admin2))
                            .ToList();
            }
            else
            {
                result = _context.Users
                            .Where(u => u.IsActive
                                    && (u.Role == Role.Admin2))
                            .ToList();
            }

            return result;
        }

        #endregion

        #region Single Search
        public User Find(int id) =>
            _context.Users.FirstOrDefault(u => u.IsActive && u.Id == id) ?? new User();

        public User FindByUsername(string username) => 
            _context.Users?.FirstOrDefault(u => u.IsActive && u.Username.Trim().Equals(username)) ?? new User();

        public User FindByUsernameAndPassword(string username, string password) 
            =>  _context.Users
                    .FirstOrDefault(u => u.IsActive
                    && u.Username.Trim().Equals(username) 
                    && u.Password == password
                    && (u.Role == Role.Admin || u.Role == Role.Admin2));
        #endregion

        #region Other Search
        public bool IsUserExists(string username)
        {
            if (string.IsNullOrEmpty(username))
            {
                return false;
            }

            // case sensitive for now to avoid username exhaustion during testing
            // ex. Username1 != username1
            return _context.Users.Any(u => u.IsActive && u.Username.Trim().Equals(username));
        }

        public bool IsUserOnline(int id)
        {
            if (id <= 0)
            {
                return false;
            }

            return _context.Users
                .Where(u => u.IsActive && u.Id == id)
                .Select(u => u.IsOnline)
                .FirstOrDefault();
        }
        #endregion

        #region basic operations
        public void Update(User user)
        {
            ArgumentNullException.ThrowIfNull(user);

            try
            {
                _context.Users.Update(user);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion
    }
}
