namespace Marvel.Project.Core.Entities;


public record FeaturedMovie : IMovie
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public DateTime ReleaseDate { get; set; }
    public string Description { get; set; } = string.Empty;
    public string Image { get; set; } = string.Empty;
}
