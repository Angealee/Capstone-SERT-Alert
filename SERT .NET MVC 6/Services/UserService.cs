using SertWebApp.Interfaces;
using SertWebApp.Models;

namespace SertWebApp.Services
{
    public class UserService(HttpClient httpClient, IConfiguration configuration, ILogger<UserService> logger) : IUserService
    {
        private readonly HttpClient _httpClient = httpClient;
        private readonly IConfiguration _configuration = configuration;
        private readonly ILogger<UserService> _logger = logger;

        public async Task<UserModel?> GetUserByUsernameAsync(string username)
        {
            var baseUrl = _configuration["SertAPI:BaseUrl"];
            var getUserEndpoint = _configuration["SertAPI:SertUserEndpoints:GetUser"];
            var apiUrl = $"{baseUrl}{getUserEndpoint}{username}";

            try
            {
                var response = await _httpClient.GetAsync(apiUrl);
                if (response.IsSuccessStatusCode)
                {
                    return await response.Content.ReadAsAsync<UserModel>();
                }
                else
                {
                    _logger.LogError($"API call to {apiUrl} failed with status code {response.StatusCode}");
                }
            }
            catch (HttpRequestException ex)
            {
                _logger.LogError(ex, "Network error while calling the API.");
            }
            catch (TaskCanceledException ex)
            {
                _logger.LogError(ex, "API call timed out.");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An unexpected error occurred while calling the API.");
            }

            return null;
        }
    }
}
