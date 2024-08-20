using Microsoft.EntityFrameworkCore;
using SertApi.DAL;
using SertApi.Interfaces;

namespace SertApi.Repositories
{
    public class UserRepository(ApplicationDbContext context) : IUserRepository
    {
        private readonly ApplicationDbContext _context = context;

        public async Task<User> FindByUsername(string username)
        {
            if (string.IsNullOrWhiteSpace(username))
            {
                throw new ArgumentNullException(nameof(username));
            }

            return await _context.Users.FirstOrDefaultAsync(u => u.Username == username) 
                ?? throw new Exception("User not found");
        }

        public async Task<bool> IsUserExists(string username)
        {
            if (string.IsNullOrWhiteSpace(username))
            {
                throw new ArgumentNullException(nameof(username));
            }

            // case sensitive for now to avoid username exhaustion during testing
            // ex. Username1 != username1
            return await _context.Users.AnyAsync(u => u.Username == username);
        }

        public async Task<bool> IsUserOnline(string username)
        {
            if (string.IsNullOrWhiteSpace(username))
            {
                throw new ArgumentNullException(nameof(username));
            }

            return await _context.Users
                .Where(u => u.Username == username)
                .Select(u => u.IsOnline)
                .FirstOrDefaultAsync();
        }

        

        public async Task Add(User user)
        {
            try
            {
                _context.Users.Add(user);
                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }
        
    }
}
