using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SertApi.Migrations
{
    /// <inheritdoc />
    public partial class AddIsOnlineColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Firstname",
                table: "Users",
                newName: "FirstName");

            migrationBuilder.AddColumn<bool>(
                name: "IsOnline",
                table: "Users",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsOnline",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "Users",
                newName: "Firstname");
        }
    }
}
