using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Marvel.Project.Data.Migrations
{
    /// <inheritdoc />
    public partial class updatedCharacterTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FeaturedMovies_Villains_VillainId",
                table: "FeaturedMovies");

            migrationBuilder.DropIndex(
                name: "IX_FeaturedMovies_VillainId",
                table: "FeaturedMovies");

            migrationBuilder.DropColumn(
                name: "VillainId",
                table: "FeaturedMovies");

            migrationBuilder.AddColumn<Guid>(
                name: "MovieId",
                table: "Villains",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "FeaturedMovieVillain",
                columns: table => new
                {
                    FeaturedMoviesId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    villainsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FeaturedMovieVillain", x => new { x.FeaturedMoviesId, x.villainsId });
                    table.ForeignKey(
                        name: "FK_FeaturedMovieVillain_FeaturedMovies_FeaturedMoviesId",
                        column: x => x.FeaturedMoviesId,
                        principalTable: "FeaturedMovies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FeaturedMovieVillain_Villains_villainsId",
                        column: x => x.villainsId,
                        principalTable: "Villains",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Villains_MovieId",
                table: "Villains",
                column: "MovieId");

            migrationBuilder.CreateIndex(
                name: "IX_FeaturedMovieVillain_villainsId",
                table: "FeaturedMovieVillain",
                column: "villainsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Villains_Movies_MovieId",
                table: "Villains",
                column: "MovieId",
                principalTable: "Movies",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Villains_Movies_MovieId",
                table: "Villains");

            migrationBuilder.DropTable(
                name: "FeaturedMovieVillain");

            migrationBuilder.DropIndex(
                name: "IX_Villains_MovieId",
                table: "Villains");

            migrationBuilder.DropColumn(
                name: "MovieId",
                table: "Villains");

            migrationBuilder.AddColumn<Guid>(
                name: "VillainId",
                table: "FeaturedMovies",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_FeaturedMovies_VillainId",
                table: "FeaturedMovies",
                column: "VillainId");

            migrationBuilder.AddForeignKey(
                name: "FK_FeaturedMovies_Villains_VillainId",
                table: "FeaturedMovies",
                column: "VillainId",
                principalTable: "Villains",
                principalColumn: "Id");
        }
    }
}
