using Microsoft.EntityFrameworkCore;
using SertWebApp.Interfaces;
using SertWebApp.Managers;
using SertWebApp.Models;
using SertWebApp.Repositories;
using SertWebApp.Services;
using System.Configuration;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Environment.IsDevelopment()
    ? builder.Configuration.GetConnectionString("DevConnection")
    : builder.Configuration.GetConnectionString("AzureConnection");

// Add services to the container.
//builder.Services.AddDbContext<SertSchemaContext>(options =>
//       options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString),
//       mySqlOptions => mySqlOptions.EnableStringComparisonTranslations()));
builder.Services.AddDbContext<SertSchemaContext>(options =>
       options.UseSqlServer(connectionString));
builder.Services.AddControllersWithViews();
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30); // Set session timeout
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});
builder.Services.AddHttpClient();

builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped<ISessionService, SessionService>();
builder.Services.AddScoped<IFileInputService, FileInputService>();
builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddScoped<IUserRepository, UserRepository>(); // Register UserRepository
builder.Services.AddScoped<IReportRepository, ReportRepository>(); // Register ReportRepository

builder.Services.AddScoped<IUserManager, UserManager>();
builder.Services.AddScoped<IReportManager, ReportManager>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()  // Allow requests from any origin
               .AllowAnyMethod()  // Allow any HTTP method (GET, POST, PUT, DELETE, etc.)
               .AllowAnyHeader(); // Allow any headers
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseCors("AllowAll");
app.UseSession();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
