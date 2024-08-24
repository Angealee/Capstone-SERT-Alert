using Microsoft.EntityFrameworkCore;
using SertApi.DAL;
using SertApi.Interfaces;

namespace SertApi.Repositories
{
    public class UserRepository(ApplicationDbContext context) : IUserRepository
    {
        private readonly ApplicationDbContext _context = context;

        public async Task<User> Find(int id)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.IsActive == true && u.Id == id)
                ?? throw new Exception("User not found");
        }

        public async Task<List<User>> FindAll()
        {
            return await _context.Users.ToListAsync()
                ?? new List<User>();
        }

        public async Task<User> FindByUsername(string username)
        {
            if (string.IsNullOrWhiteSpace(username))
            {
                throw new ArgumentNullException(nameof(username));
            }

            return await _context.Users.FirstOrDefaultAsync(u => u.IsActive == true && u.Username.Trim().Equals(username)) 
                ?? throw new Exception("User not found");
        }

        public async Task<bool> IsUserExists(int id)
        {
            if (id <= 0)
            {
                throw new ArgumentNullException(nameof(id));
            }

            // case sensitive for now to avoid username exhaustion during testing
            // ex. Username1 != username1
            return await _context.Users.AnyAsync(u => u.IsActive == true && u.Id == id);
        }

        public async Task<bool> IsUserOnline(int id)
        {
            if (id <= 0)
            {
                throw new ArgumentNullException(nameof(id));
            }

            return await _context.Users
                .Where(u => u.IsActive == true && u.Id == id)
                .Select(u => u.IsOnline)
                .FirstOrDefaultAsync();
        }

        #region basic operations
        public async Task Add(User user)
        {
            ArgumentNullException.ThrowIfNull(user);

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

        public async Task Update(User user)
        {
            ArgumentNullException.ThrowIfNull(user);

            try
            {
                _context.Users.Update(user);
                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task Delete(User user)
        {
            ArgumentNullException.ThrowIfNull(user);

            try
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        #endregion

    }
}
