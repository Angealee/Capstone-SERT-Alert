namespace SertApi.DAL
{
    public class Report
    {
        public int Id { get; set; }
        public required string BuildingName { get; set; }
        public string LocationDetail { get; set; } = string.Empty;
        public required string Content { get; set; }
        public byte[]? Attachment { get; set; } // Changed the type to byte[] for storing as blob

        // audit fields
        public DateTime DateCreated { get; set; } = DateTime.Now;
        public DateTime DateModified { get; set; }
    }
}