using Microsoft.AspNetCore.Mvc;
using SertApi.DAL;
using SertApi.Interfaces;
using SertApi.Models;
using SertApi.Repositories;

namespace SertApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SertUserController(ILogger<SertUserController> logger, UserRepository userRepository) : ControllerBase
    {
        private readonly ILogger<SertUserController> _logger = logger;
        private readonly IUserRepository _userRepository = userRepository;


        #region Users
        [HttpGet("GetAllUsers")]
        public async Task<List<User>> GetAllUsers()
        {
            try
            {
                return await _userRepository.FindAll();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in GetAllUsers()");
                return new List<User>();
            }
        }

        [HttpGet("GetUserByUsername")]
        public async Task<IActionResult> GetUserByUsername(string username)
        {
            try
            {
                var user = await _userRepository.FindByUsername(username);
                if (user == null)
                {
                    return NotFound();
                }
                return Ok(user);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in GetUserByUsername()");
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("AddUser")]
        public async Task<IActionResult> AddUser(UserModel jsonModel)
        {
            try
            {
                var exists = await _userRepository.IsUserExists(jsonModel.Id, jsonModel.Username);

                if (exists)
                {
                    return BadRequest("User already exists.");
                }

                var newUser = new User
                {
                    Username = jsonModel.Username,
                    Password = jsonModel.Password,
                    Name = jsonModel.Name,
                    Course = jsonModel.Course,
                    Year = jsonModel.Year,
                    Section = jsonModel.Section,
                    Email = jsonModel.Email,
                    Position = jsonModel.Position,
                    Role = jsonModel.Role,
                };

                await _userRepository.Add(newUser);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in AddUser()");
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("UpdateUser")]
        public async Task<IActionResult> UpdateUser(UserModel jsonModel)
        {
            try
            {
                var userToUpdate = await _userRepository.Find(jsonModel.Id);

                if (userToUpdate == null)
                {
                    return NotFound();
                }

                userToUpdate.Username = jsonModel.Username;
                userToUpdate.Password = jsonModel.Password;
                userToUpdate.Name = jsonModel.Name;
                userToUpdate.Course = jsonModel.Course;
                userToUpdate.Year = jsonModel.Year;
                userToUpdate.Section = jsonModel.Section;
                userToUpdate.Email = jsonModel.Email;
                userToUpdate.Position = jsonModel.Position;
                userToUpdate.Role = jsonModel.Role;
                userToUpdate.DateModified = DateTime.Now;

                await _userRepository.Update(userToUpdate);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in UpdateUser()");
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("DeleteUser")]
        public async Task<IActionResult> DeleteUser(UserModel jsonModel)
        {
            try
            {
                // This will only "soft delete" the user
                // To preserve records for audit purposes
                var userToUpdate = await _userRepository.Find(jsonModel.Id);

                userToUpdate.IsActive = false;
                userToUpdate.IsOnline = false;
                userToUpdate.DateModified = DateTime.Now;

                await _userRepository.Update(userToUpdate);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in DeleteUser()");
                return StatusCode(500, ex.Message);
            }
        }
        #endregion
    }
}
