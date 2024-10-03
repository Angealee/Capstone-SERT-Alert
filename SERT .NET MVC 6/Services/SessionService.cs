using SertWebApp.Interfaces;
using SertWebApp.Models;
using System.Text.Json;

namespace SertWebApp.Services
{
    public class SessionService(IHttpContextAccessor httpContextAccessor) : ISessionService
    {
        private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;
        private const string CURRENT_USER = "CurrentUser";
        private ISession? CurrentSession => _httpContextAccessor.HttpContext?.Session;

        public void SetCurrentUser(UserModel user) => CurrentSession?.SetString(CURRENT_USER, JsonSerializer.Serialize(user));

        public void ClearSession() => CurrentSession?.Clear();

        public UserModel GetCurrentUser()
        {
            var blankUser = new UserModel
            {
                Id = -1,
                ErrorMessage = "No user"
            };

            try
            {
                var userJson = CurrentSession?.GetString(CURRENT_USER);

                if (string.IsNullOrEmpty(userJson))
                    return blankUser;

                var currentUser = JsonSerializer.Deserialize<UserModel>(userJson);

                return currentUser ?? blankUser;
            }
            catch (Exception)
            {
                return blankUser;
            }
        }
    }
}
