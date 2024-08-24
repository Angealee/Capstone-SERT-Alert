using Microsoft.EntityFrameworkCore;
using SertApi;
using SertApi.Hubs;
using SertApi.Repositories;
using System.Configuration;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection")
                     ?? throw new ConfigurationErrorsException("Connection string not found");

// Add services to the container.
builder.Services.AddDbContext<ApplicationDbContext>(options =>
       options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));
builder.Services.AddScoped<UserRepository>(); // Register UserRepository
builder.Services.AddScoped<ReportRepository>(); // Register ReportRepository
builder.Services.AddControllers();
builder.Services.AddSignalR();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.MapHub<MainHub>("/serthub");

app.Run();
