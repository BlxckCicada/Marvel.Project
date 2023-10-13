namespace Marvel.Project.API.Models;
using System;

public record VillainMovie
{
    public Guid VillainId { get; set; }
    public Guid MovieId { get; set; }

    public virtual Villain Villain { get; set; } = new Villain();
    public virtual Movie Movie { get; set; } = new Movie();
}