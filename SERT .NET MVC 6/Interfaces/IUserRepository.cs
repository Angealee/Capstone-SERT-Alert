using SertWebApp.Enums;
using SertWebApp.Models;

namespace SertWebApp.Interfaces
{
    public interface IUserRepository
    {
        User Find(int id);
        List<User> FindAll(Role currentUserRole);
        List<User> FindAllUsers();
        List<User> FindAllAdmins(Role currentUserRole);
        User FindByUsername(string username);
        User? FindByUsernameAndPassword(string username, string password);
        bool IsUserOnline(int id);
        bool IsUserExists(string username);
        void Update(User user);
    }
}
