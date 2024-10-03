namespace SertWebApp.Interfaces
{
    public interface IFileInputService
    {
        byte[] ConvertToByteArray(IFormFile file);
        bool IsPdfOrImageFile(IFormFile file);
        string GetFileExtensionFromFileType(string fileType);
    }
}