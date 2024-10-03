using System.ComponentModel.DataAnnotations;

namespace SertWebApp.Enums
{
    public enum Role
    {
        [Display(Name = "No Role")]
        None = -1,
        [Display(Name = "SERT User")]
        User = 0,
        [Display(Name = "Root Admin")]
        Admin = 1,
        [Display(Name = "Administrator")]
        Admin2 = 2
    }
}
