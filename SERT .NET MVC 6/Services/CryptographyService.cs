using System.Security.Cryptography;
using System.Text;

namespace SertWebApp.Services
{
    public static class CryptographyService
    {
        private static readonly string Salt = "$3Rtpr0jEcT[24]";

        public static string EncryptPassword(string password)
        {
            using (var sha256 = SHA256.Create())
            {
                var saltedPassword = password + Salt;
                var saltedPasswordBytes = Encoding.UTF8.GetBytes(saltedPassword);
                var hashBytes = sha256.ComputeHash(saltedPasswordBytes);
                return Convert.ToBase64String(hashBytes);
            }
        }

        public static bool VerifyPassword(string enteredPassword, string storedPasswordHash)
        {
            var enteredPasswordHash = EncryptPassword(enteredPassword);
            return enteredPasswordHash == storedPasswordHash;
        }
    }
}
