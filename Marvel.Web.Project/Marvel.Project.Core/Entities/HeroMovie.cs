namespace Marvel.Project.Core.Entities;

public record HeroMovie : IHeroMovie
{
    public Guid Id { get; set; }

    public Hero Hero { get; set; } = new Hero();

    public Movie Movie { get; set; } = new Movie();

}