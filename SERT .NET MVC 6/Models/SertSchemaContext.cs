using Microsoft.EntityFrameworkCore;

namespace SertWebApp.Models;

public partial class SertSchemaContext : DbContext
{
    public SertSchemaContext()
    {
    }

    public SertSchemaContext(DbContextOptions<SertSchemaContext> options)
        : base(options)
    {
    }

    //public virtual DbSet<Efmigrationshistory> Efmigrationshistories { get; set; }

    public virtual DbSet<Report> Reports { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        //modelBuilder.Entity<Efmigrationshistory>(entity =>
        //{
        //    entity.HasKey(e => e.MigrationId);

        //    entity.ToTable("__efmigrationshistory");

        //    entity.Property(e => e.MigrationId).HasMaxLength(150);
        //    entity.Property(e => e.ProductVersion).HasMaxLength(32);
        //});

        modelBuilder.Entity<Report>(entity =>
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("reports");

            entity.Property(e => e.DateCreated).HasColumnType("datetime");
            entity.Property(e => e.DateModified).HasColumnType("datetime");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("users");

            entity.Property(e => e.DateCreated).HasColumnType("datetime");
            entity.Property(e => e.DateModified).HasColumnType("datetime");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    //public DbSet<ViewModels.UserViewModel> UserDetailsViewModel { get; set; } = default!;
}