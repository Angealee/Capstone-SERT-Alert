using SertWebApp.Enums;
using SertWebApp.Services;

namespace SertWebApp.Models;

public partial class User
{
    public int Id { get; set; }

    public string Username { get; set; } = null!;

    private string _password = null!;
    public string Password
    {
        get => _password;
        set => _password = CryptographyService.EncryptPassword(value);
    }

    public string Name { get; set; } = null!;

    public string Course { get; set; } = null!;

    public string Year { get; set; } = null!;

    public string Section { get; set; } = null!;

    public string? Email { get; set; }

    public string Position { get; set; } = null!;

    public Role Role { get; set; }

    public bool IsActive { get; set; }

    public bool IsOnline { get; set; }

    public DateTime DateCreated { get; set; }

    public DateTime? DateModified { get; set; }
}
