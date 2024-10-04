using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SertWebApp.Enums;

namespace SertWebApp.Models
{
    public partial class SertSchemaContext
    {
        partial void OnModelCreatingPartial(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                // Configure the Role property to use the Role enum
                entity.Property(e => e.Role)
                      .HasConversion(new EnumToNumberConverter<Role, int>());
            });
        }
    }
}
