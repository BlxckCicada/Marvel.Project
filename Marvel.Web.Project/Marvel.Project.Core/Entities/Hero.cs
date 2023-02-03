namespace Marvel.Project.Core.Entities;
using System.ComponentModel.DataAnnotations;
using System;

public record Hero : IEntity<Guid>
{
    [Required]
    public Guid Id { get; set; }

    [Required]
    public string Name { get; set; } = string.Empty;

    [Required]
    public string FirstName { get; set; } = string.Empty;

    public string? LastName { get; set; }

    [Required]
    public string ActualFirstName { get; set; } = string.Empty;

    [Required]
    public string ActualLastName { get; set; } = string.Empty;

    [Required]
    [MaxLength(1024, ErrorMessage = "Description of the character can only be 114 words or less")]
    public string Description { get; set; } = string.Empty;


    public string Image { get; set; } = string.Empty;


    public IList<Movie>? Movies { get; set; }
    public IList<FeaturedMovie>? FeaturedMovies { get; set; }
}