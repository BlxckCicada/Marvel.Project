using System.Security.AccessControl;
namespace Marvel.Project.Core.Entities;

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

public record Movie : IMovie
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public DateTime ReleaseDate { get; set; }
    public string Description { get; set; } = string.Empty;
    public string Image { get; set; } = string.Empty;
    public IList<Hero> heroes { get; set; } = new List<Hero>();
}