using SertWebApp.Models;

namespace SertWebApp.Interfaces
{
    public interface IUserService
    {
        Task<UserModel?> GetUserByUsernameAsync(string username);
    }
}
