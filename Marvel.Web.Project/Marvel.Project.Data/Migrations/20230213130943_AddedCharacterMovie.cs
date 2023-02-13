using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Marvel.Project.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddedCharacterMovie : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HeroMovie_Heroes_HeroesId",
                table: "HeroMovie");

            migrationBuilder.DropForeignKey(
                name: "FK_HeroMovie_Movies_MoviesId",
                table: "HeroMovie");

            migrationBuilder.DropTable(
                name: "MovieVillain");

            migrationBuilder.RenameColumn(
                name: "MoviesId",
                table: "HeroMovie",
                newName: "MovieId");

            migrationBuilder.RenameColumn(
                name: "HeroesId",
                table: "HeroMovie",
                newName: "HeroId");

            migrationBuilder.RenameIndex(
                name: "IX_HeroMovie_MoviesId",
                table: "HeroMovie",
                newName: "IX_HeroMovie_MovieId");

            migrationBuilder.CreateTable(
                name: "VillainMovie",
                columns: table => new
                {
                    VillainId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MovieId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VillainMovie", x => new { x.VillainId, x.MovieId });
                    table.ForeignKey(
                        name: "FK_VillainMovie_Movies_MovieId",
                        column: x => x.MovieId,
                        principalTable: "Movies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_VillainMovie_Villains_VillainId",
                        column: x => x.VillainId,
                        principalTable: "Villains",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_VillainMovie_MovieId",
                table: "VillainMovie",
                column: "MovieId");

            migrationBuilder.AddForeignKey(
                name: "FK_HeroMovie_Heroes_HeroId",
                table: "HeroMovie",
                column: "HeroId",
                principalTable: "Heroes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_HeroMovie_Movies_MovieId",
                table: "HeroMovie",
                column: "MovieId",
                principalTable: "Movies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HeroMovie_Heroes_HeroId",
                table: "HeroMovie");

            migrationBuilder.DropForeignKey(
                name: "FK_HeroMovie_Movies_MovieId",
                table: "HeroMovie");

            migrationBuilder.DropTable(
                name: "VillainMovie");

            migrationBuilder.RenameColumn(
                name: "MovieId",
                table: "HeroMovie",
                newName: "MoviesId");

            migrationBuilder.RenameColumn(
                name: "HeroId",
                table: "HeroMovie",
                newName: "HeroesId");

            migrationBuilder.RenameIndex(
                name: "IX_HeroMovie_MovieId",
                table: "HeroMovie",
                newName: "IX_HeroMovie_MoviesId");

            migrationBuilder.CreateTable(
                name: "MovieVillain",
                columns: table => new
                {
                    MoviesId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    villainsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MovieVillain", x => new { x.MoviesId, x.villainsId });
                    table.ForeignKey(
                        name: "FK_MovieVillain_Movies_MoviesId",
                        column: x => x.MoviesId,
                        principalTable: "Movies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MovieVillain_Villains_villainsId",
                        column: x => x.villainsId,
                        principalTable: "Villains",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MovieVillain_villainsId",
                table: "MovieVillain",
                column: "villainsId");

            migrationBuilder.AddForeignKey(
                name: "FK_HeroMovie_Heroes_HeroesId",
                table: "HeroMovie",
                column: "HeroesId",
                principalTable: "Heroes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_HeroMovie_Movies_MoviesId",
                table: "HeroMovie",
                column: "MoviesId",
                principalTable: "Movies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
