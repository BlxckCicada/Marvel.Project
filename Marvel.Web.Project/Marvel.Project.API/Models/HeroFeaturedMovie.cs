namespace Marvel.Project.API.Models;

public record HeroFeaturedMovie : IHeroMovie
{
    public Guid Id { get; set; }

    public Hero Hero { get; set; } = new Hero();

    public Movie Movie { get; set; } = new Movie();

}