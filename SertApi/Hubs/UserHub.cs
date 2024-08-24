using Microsoft.AspNetCore.SignalR;
using SertApi.Interfaces;

namespace SertApi.Hubs
{
    public class UserHub(IUserRepository userRepository) : Hub
    {
        private readonly IUserRepository _userRepository = userRepository;

        // Test SignalR endpoint
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }

        public async Task CheckUserOnlineStatus(int id)
        {
            while (true)
            {
                var isOnline = await _userRepository.IsUserOnline(id);
                await Clients.Caller.SendAsync("ReceiveUserOnlineStatus", isOnline);
                await Task.Delay(5000); // Check every 5 seconds
            }
        }
    }
}