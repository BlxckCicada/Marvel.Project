
namespace Marvel.Project.API.Queries;
using Marvel.Project.API.Models;
using Marvel.Project.Core.Entities;
using MediatR;

public record GetEntityByIdRequest<TModel, TKey, TCore> : IRequest<TModel>
where TModel : class, IModel<TKey>
where TCore : class, IEntity<TKey>
{
    public TKey Id { get; init; } = default!;
}
