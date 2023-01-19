namespace Marvel.Project.API.Models;
using Marvel.Project.API.Models;

public interface IHeroMovie : IModel<Guid>
{
    public new Guid Id { get; set; }

    public Hero Hero { get; set; }

    public Movie Movie { get; set; }

}