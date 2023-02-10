using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Marvel.Project.Data.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedMoviesList : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FeaturedMovies_Heroes_HeroId",
                table: "FeaturedMovies");

            migrationBuilder.DropForeignKey(
                name: "FK_Movies_Heroes_HeroId",
                table: "Movies");

            migrationBuilder.DropIndex(
                name: "IX_Movies_HeroId",
                table: "Movies");

            migrationBuilder.DropIndex(
                name: "IX_FeaturedMovies_HeroId",
                table: "FeaturedMovies");

            migrationBuilder.DropColumn(
                name: "HeroId",
                table: "Movies");

            migrationBuilder.DropColumn(
                name: "HeroId",
                table: "FeaturedMovies");

            migrationBuilder.CreateTable(
                name: "FeaturedMovieHero",
                columns: table => new
                {
                    FeaturedMoviesId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    heroesId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FeaturedMovieHero", x => new { x.FeaturedMoviesId, x.heroesId });
                    table.ForeignKey(
                        name: "FK_FeaturedMovieHero_FeaturedMovies_FeaturedMoviesId",
                        column: x => x.FeaturedMoviesId,
                        principalTable: "FeaturedMovies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FeaturedMovieHero_Heroes_heroesId",
                        column: x => x.heroesId,
                        principalTable: "Heroes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "HeroMovie",
                columns: table => new
                {
                    MoviesId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    heroesId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HeroMovie", x => new { x.MoviesId, x.heroesId });
                    table.ForeignKey(
                        name: "FK_HeroMovie_Heroes_heroesId",
                        column: x => x.heroesId,
                        principalTable: "Heroes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HeroMovie_Movies_MoviesId",
                        column: x => x.MoviesId,
                        principalTable: "Movies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FeaturedMovieHero_heroesId",
                table: "FeaturedMovieHero",
                column: "heroesId");

            migrationBuilder.CreateIndex(
                name: "IX_HeroMovie_heroesId",
                table: "HeroMovie",
                column: "heroesId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FeaturedMovieHero");

            migrationBuilder.DropTable(
                name: "HeroMovie");

            migrationBuilder.AddColumn<Guid>(
                name: "HeroId",
                table: "Movies",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "HeroId",
                table: "FeaturedMovies",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Movies_HeroId",
                table: "Movies",
                column: "HeroId");

            migrationBuilder.CreateIndex(
                name: "IX_FeaturedMovies_HeroId",
                table: "FeaturedMovies",
                column: "HeroId");

            migrationBuilder.AddForeignKey(
                name: "FK_FeaturedMovies_Heroes_HeroId",
                table: "FeaturedMovies",
                column: "HeroId",
                principalTable: "Heroes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Movies_Heroes_HeroId",
                table: "Movies",
                column: "HeroId",
                principalTable: "Heroes",
                principalColumn: "Id");
        }
    }
}
