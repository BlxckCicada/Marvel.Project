using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Marvel.Project.Data.Migrations
{
    /// <inheritdoc />
    public partial class updatedTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "HeroFeaturedMovie");

            migrationBuilder.DropTable(
                name: "HeroMovie");

            migrationBuilder.DropTable(
                name: "VillainFeaturedMovie");

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

            migrationBuilder.AddColumn<Guid>(
                name: "VillainId",
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

            migrationBuilder.CreateIndex(
                name: "IX_FeaturedMovies_VillainId",
                table: "FeaturedMovies",
                column: "VillainId");

            migrationBuilder.AddForeignKey(
                name: "FK_FeaturedMovies_Heroes_HeroId",
                table: "FeaturedMovies",
                column: "HeroId",
                principalTable: "Heroes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_FeaturedMovies_Villains_VillainId",
                table: "FeaturedMovies",
                column: "VillainId",
                principalTable: "Villains",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Movies_Heroes_HeroId",
                table: "Movies",
                column: "HeroId",
                principalTable: "Heroes",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FeaturedMovies_Heroes_HeroId",
                table: "FeaturedMovies");

            migrationBuilder.DropForeignKey(
                name: "FK_FeaturedMovies_Villains_VillainId",
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

            migrationBuilder.DropIndex(
                name: "IX_FeaturedMovies_VillainId",
                table: "FeaturedMovies");

            migrationBuilder.DropColumn(
                name: "HeroId",
                table: "Movies");

            migrationBuilder.DropColumn(
                name: "HeroId",
                table: "FeaturedMovies");

            migrationBuilder.DropColumn(
                name: "VillainId",
                table: "FeaturedMovies");

            migrationBuilder.CreateTable(
                name: "HeroFeaturedMovie",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    HeroId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MovieId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HeroFeaturedMovie", x => x.Id);
                    table.ForeignKey(
                        name: "FK_HeroFeaturedMovie_Heroes_HeroId",
                        column: x => x.HeroId,
                        principalTable: "Heroes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HeroFeaturedMovie_Movies_MovieId",
                        column: x => x.MovieId,
                        principalTable: "Movies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "HeroMovie",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    HeroId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MovieId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HeroMovie", x => x.Id);
                    table.ForeignKey(
                        name: "FK_HeroMovie_Heroes_HeroId",
                        column: x => x.HeroId,
                        principalTable: "Heroes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HeroMovie_Movies_MovieId",
                        column: x => x.MovieId,
                        principalTable: "Movies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VillainFeaturedMovie",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MovieId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    VillainId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VillainFeaturedMovie", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VillainFeaturedMovie_Movies_MovieId",
                        column: x => x.MovieId,
                        principalTable: "Movies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_VillainFeaturedMovie_Villains_VillainId",
                        column: x => x.VillainId,
                        principalTable: "Villains",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_HeroFeaturedMovie_HeroId",
                table: "HeroFeaturedMovie",
                column: "HeroId");

            migrationBuilder.CreateIndex(
                name: "IX_HeroFeaturedMovie_MovieId",
                table: "HeroFeaturedMovie",
                column: "MovieId");

            migrationBuilder.CreateIndex(
                name: "IX_HeroMovie_HeroId",
                table: "HeroMovie",
                column: "HeroId");

            migrationBuilder.CreateIndex(
                name: "IX_HeroMovie_MovieId",
                table: "HeroMovie",
                column: "MovieId");

            migrationBuilder.CreateIndex(
                name: "IX_VillainFeaturedMovie_MovieId",
                table: "VillainFeaturedMovie",
                column: "MovieId");

            migrationBuilder.CreateIndex(
                name: "IX_VillainFeaturedMovie_VillainId",
                table: "VillainFeaturedMovie",
                column: "VillainId");
        }
    }
}
