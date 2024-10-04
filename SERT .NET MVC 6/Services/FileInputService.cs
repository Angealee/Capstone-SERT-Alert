using SertWebApp.Interfaces;
using System.Security.Cryptography.X509Certificates;

namespace SertWebApp.Services
{
    public class FileInputService : IFileInputService
    {
        public byte[] ConvertToByteArray(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return Array.Empty<byte>();
            }

            using (var memoryStream = new MemoryStream())
            {
                file.CopyTo(memoryStream);
                return memoryStream.ToArray();
            }
        }
        public bool IsPdfOrImageFile(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return false;
            }

            string[] allowedMimeTypes = { "application/pdf", "image/jpeg", "image/png", "image/gif" };
            string fileMimeType = file.ContentType;

            return allowedMimeTypes.Contains(fileMimeType);
        }

        public string GetFileExtensionFromFileType(string fileType)
        {
            if (string.IsNullOrWhiteSpace(fileType))
            {
                return string.Empty;
            }

            return fileType switch
            {
                "application/pdf" => ".pdf",
                "image/jpeg" => ".jpg",
                "image/png" => ".png",
                "image/gif" => ".gif",
                _ => string.Empty,
            };
        }
    }
}
