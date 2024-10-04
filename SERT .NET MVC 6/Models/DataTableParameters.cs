namespace SertWebApp.Models
{
    public class DataTableParameters
    {
        public int Draw { get; set; }
        public int Start { get; set; }
        public int Length { get; set; }
        public SearchParameters Search { get; set; }
        public OrderParameters[] Order { get; set; }
        public ColumnParameters[] Columns { get; set; }
        public bool isAdmin { get; set; }
    }

    public class SearchParameters
    {
        public string Value { get; set; }
        public bool Regex { get; set; }
    }

    public class OrderParameters
    {
        public int Column { get; set; }
        public string Dir { get; set; }
    }

    public class ColumnParameters
    {
        public string Data { get; set; }
        public string Name { get; set; }
        public bool Searchable { get; set; }
        public bool Orderable { get; set; }
        public SearchParameters Search { get; set; }
    }
}
