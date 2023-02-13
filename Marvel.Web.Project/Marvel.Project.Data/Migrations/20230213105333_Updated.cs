using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Marvel.Project.Data.Migrations
{
    /// <inheritdoc />
    public partial class Updated : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HeroMovie_Heroes_heroesId",
                table: "HeroMovie");

            migrationBuilder.DropForeignKey(
                name: "FK_Villains_Movies_MovieId",
                table: "Villains");

            migrationBuilder.DropIndex(
                name: "IX_Villains_MovieId",
                table: "Villains");

            migrationBuilder.DropPrimaryKey(
                name: "PK_HeroMovie",
                table: "HeroMovie");

            migrationBuilder.DropIndex(
                name: "IX_HeroMovie_heroesId",
                table: "HeroMovie");

            migrationBuilder.DropColumn(
                name: "MovieId",
                table: "Villains");

            migrationBuilder.RenameColumn(
                name: "heroesId",
                table: "HeroMovie",
                newName: "HeroesId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_HeroMovie",
                table: "HeroMovie",
                columns: new[] { "HeroesId", "MoviesId" });

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
                name: "IX_HeroMovie_MoviesId",
                table: "HeroMovie",
                column: "MoviesId");

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
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HeroMovie_Heroes_HeroesId",
                table: "HeroMovie");

            migrationBuilder.DropTable(
                name: "MovieVillain");

            migrationBuilder.DropPrimaryKey(
                name: "PK_HeroMovie",
                table: "HeroMovie");

            migrationBuilder.DropIndex(
                name: "IX_HeroMovie_MoviesId",
                table: "HeroMovie");

            migrationBuilder.RenameColumn(
                name: "HeroesId",
                table: "HeroMovie",
                newName: "heroesId");

            migrationBuilder.AddColumn<Guid>(
                name: "MovieId",
                table: "Villains",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_HeroMovie",
                table: "HeroMovie",
                columns: new[] { "MoviesId", "heroesId" });

            migrationBuilder.CreateIndex(
                name: "IX_Villains_MovieId",
                table: "Villains",
                column: "MovieId");

            migrationBuilder.CreateIndex(
                name: "IX_HeroMovie_heroesId",
                table: "HeroMovie",
                column: "heroesId");

            migrationBuilder.AddForeignKey(
                name: "FK_HeroMovie_Heroes_heroesId",
                table: "HeroMovie",
                column: "heroesId",
                principalTable: "Heroes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Villains_Movies_MovieId",
                table: "Villains",
                column: "MovieId",
                principalTable: "Movies",
                principalColumn: "Id");
        }
    }
}
