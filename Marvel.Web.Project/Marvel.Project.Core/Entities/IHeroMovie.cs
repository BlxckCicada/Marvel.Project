

using Marvel.Project.Core.Entities;

public interface IHeroMovie : IEntity<Guid>
{
    public new Guid Id { get; set; }

    public Hero Hero { get; set; }

    public Movie Movie { get; set; } 

}