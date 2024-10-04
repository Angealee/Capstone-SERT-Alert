using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace SertWebApp.Models.ViewModels
{
    public class ChangePasswordViewModel
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Current Password is required"), DataType(DataType.Password), PasswordPropertyText(true)]
        public string CurrentPassword { get; set; }
        [Required(ErrorMessage = "New Password is required"), DataType(DataType.Password), PasswordPropertyText(true)]
        public string NewPassword { get; set; }
        [Required(ErrorMessage = "Confirm Password is required"), DataType(DataType.Password), PasswordPropertyText(true)]
        public string ConfirmPassword { get; set; }
    }
}
