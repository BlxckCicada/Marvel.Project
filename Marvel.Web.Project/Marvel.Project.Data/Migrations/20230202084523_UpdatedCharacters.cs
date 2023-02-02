using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Marvel.Project.Data.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedCharacters : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "VillainName",
                table: "Villains",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "HeroName",
                table: "Heroes",
                newName: "Name");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Villains",
                newName: "VillainName");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Heroes",
                newName: "HeroName");
        }
    }
}
