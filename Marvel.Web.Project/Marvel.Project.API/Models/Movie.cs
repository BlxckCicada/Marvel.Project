namespace Marvel.Project.API.Models;
using System;

public record Movie : IMovie
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public DateTime ReleaseDate { get; set; }
    public string Description { get; set; } = string.Empty;
    public string Image { get; set; } = string.Empty;
}