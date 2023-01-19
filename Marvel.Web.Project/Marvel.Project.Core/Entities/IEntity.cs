namespace Marvel.Project.Core.Entities;

public interface IEntity
{

}

public interface IEntity<TKey> : IEntity
{
    TKey Id { get; set; } 
}