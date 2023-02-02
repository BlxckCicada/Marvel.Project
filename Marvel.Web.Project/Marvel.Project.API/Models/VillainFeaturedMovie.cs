namespace Marvel.Project.API.Models;

public record VillainFeaturedMovie :IModel<Guid>
{
    public Guid Id { get; set; }

    public Villain  Villain{ get; set; } = new Villain();

    public Movie Movie { get; set; } = new Movie();

}