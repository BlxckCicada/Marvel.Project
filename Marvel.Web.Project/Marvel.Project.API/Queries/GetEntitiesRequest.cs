namespace Marvel.Project.API.Queries;
using Marvel.Project.API.Models;
using Marvel.Project.Core.Entities;
using MediatR;

public record GetEntitiesRequest<TModel, TKey, TCore> : IRequest<QueryEntitiesResponse<TModel>>
where TModel : class, IModel<TKey>
where TCore : class, IEntity<TKey>;

public record QueryEntitiesResponse<TModel>
{
    public IList<TModel> Entities { get; set; } = new List<TModel>();
}