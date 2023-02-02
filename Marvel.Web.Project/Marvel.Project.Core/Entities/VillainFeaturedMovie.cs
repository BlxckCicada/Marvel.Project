namespace Marvel.Project.Core.Entities;

public record VillainFeaturedMovie :IEntity<Guid>
{
    public Guid Id { get; set; }

    public Villain  Villain{ get; set; } = new Villain();

    public Movie Movie { get; set; } = new Movie();

}