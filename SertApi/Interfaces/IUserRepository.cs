using SertApi.DAL;

namespace SertApi.Interfaces
{
    public interface IUserRepository
    {
        public Task<User> FindByUsername(string username);
        public Task<bool> IsUserOnline(string username);
    }
}
