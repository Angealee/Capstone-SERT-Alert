using SertWebApp.Enums;
using SertWebApp.Models;

namespace SertWebApp.Interfaces
{
    public interface IUserManager
    {
        UserModel Find(int id);
        UserModel Login(string username, string password);
        UserModel GetUserByUsernameAndPassword(string username, string password);
        UserModel GetUserDetails(int id);
        List<UserModel> GetAllUsers();
        List<UserModel> GetAllAdmins(Role currentUserRole);
        void Upsert(UserModel userModel);
        void Delete(int id);
        bool IsUserAlreadyExists(string username);
        void UpdateStatus(int id, bool status);
        bool VerifyPassword(int id, string storedPasswordHash);
        void ChangePassword(int id, string newPassword);
    }
}
