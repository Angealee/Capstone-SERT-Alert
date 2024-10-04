using SertWebApp.Enums;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace SertWebApp.Models.ViewModels
{
    public class UserViewModel
    {

        public int Id { get; set; }
        [Required(ErrorMessage = "Username is required")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Password is required"), DataType(DataType.Password), PasswordPropertyText(true)]
        public string Password { get; set; }
        public string? Course { get; set; }
        public string? Year { get; set; }
        public string? Section { get; set; }

        [EmailAddress]
        public string? Email { get; set; }
        public string? Position { get; set; }
        public Role Role { get; set; }
        public bool IsOnline { get; set; }
        public bool IsActive { get; set; }
        public PageMode PageMode { get; set; } = PageMode.View;
        public bool IsAdmin { get; set; } = false;
    }
}
