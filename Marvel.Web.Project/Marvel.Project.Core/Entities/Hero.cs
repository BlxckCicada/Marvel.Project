namespace Marvel.Project.Core.Entities;
using System.ComponentModel.DataAnnotations;
using System;

public record Hero : IEntity<Guid>
{
    [Required]
    public Guid Id { get; set; }

    [Required]
    public string HeroName { get; set; } = string.Empty;

    [Required]
    public string FirstName { get; set; } = string.Empty;

    public string? LastName { get; set; }

    [Required]
    public string ActualFirstName { get; set; } = string.Empty;

    [Required]
    public string ActualLastName { get; set; } = string.Empty;

    [Required]
    [MaxLength(114, ErrorMessage = "Description of the character can only be 114 characters or less")]
    public string Description { get; set; } = string.Empty;

    
    public string Image { get; set; } = string.Empty;
}