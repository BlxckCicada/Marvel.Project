namespace Marvel.Project.API.Queries;
using Marvel.Project.API.Models;
using MediatR;

public record GetEntitiesRequest<TModel, TKey> : IRequest<IList<TModel>>
where TModel : class, IModel<TKey>
{ }