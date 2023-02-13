namespace Marvel.Project.API.Models;


public record FeaturedMovie : IMovie
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public DateTime ReleaseDate { get; set; }
    public string Description { get; set; } = string.Empty;
    public string Image { get; set; } = string.Empty;
    public IList<Hero>? heroes { get; set; }
    public IList<Villain>? villains { get; set; }
}
