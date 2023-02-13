

using Marvel.Project.API.Models;
namespace Marvel.Project.API.Models;
using System.ComponentModel.DataAnnotations;
using System;

public record HeroMovie
{
    public Guid HeroId { get; set; }
    public Guid MovieId { get; set; }

    public virtual Hero Hero { get; set; } = new Hero();
    public virtual Movie Movie { get; set; } = new Movie();
}