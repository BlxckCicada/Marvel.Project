namespace Marvel.Project.API.Models;

public interface IModel
{

}

public interface IModel<TKey> : IModel
{
    TKey Id { get; set; } 
}