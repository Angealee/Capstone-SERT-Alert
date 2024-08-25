using SertApi.DAL;

namespace SertApi.Interfaces
{
    public interface IUserRepository
    {
        public Task<User> Find(int id);
        public Task<List<User>> FindAll();
        public Task<User> FindByUsername(string username);
        public Task<bool> IsUserOnline(int id);
        public Task<bool> IsUserExists(int id, string username);
        public Task Add(User user);
        public Task Update(User user);
        public Task Delete(User user);
        
    }
}
