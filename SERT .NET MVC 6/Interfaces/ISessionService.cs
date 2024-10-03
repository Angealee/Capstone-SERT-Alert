using SertWebApp.Models;

namespace SertWebApp.Interfaces
{
    public interface ISessionService
    {
        void SetCurrentUser(UserModel user);
        UserModel GetCurrentUser();
        void ClearSession();
    }
}
