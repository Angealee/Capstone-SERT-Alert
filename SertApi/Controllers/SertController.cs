using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace SertApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SertController : ControllerBase
    {
        private readonly ILogger<SertController> _logger;

        public SertController(ILogger<SertController> logger)
        {
            _logger = logger;
        }

        [HttpGet("GetUserByUsername")]
        public string GetUserByUsername()
        {
            try
            {

                var jsonStr = JsonConvert.SerializeObject(new { Name = "John Doe", Age = 30, City = "New York" });
                return jsonStr.ToString();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in GetUserByUsername");
                throw;
            }
            
        }
    }
}
