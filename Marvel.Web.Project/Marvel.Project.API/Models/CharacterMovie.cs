namespace Marvel.Project.API.Models;
using System;

public record CharacterMovie
{
    public Guid CharacterId { get; set; }
    public Guid MovieId { get; set; }
}