using Marvel.Project.API.Models;
using Marvel.Project.Core.Entities;
using MediatR;

namespace Marvel.Project.API.Commands;

public record DeleteEntityRequest<TModel, TKey, TCore> : IRequest<CommandResponse<TModel>>
where TModel : class, IModel<TKey>
where TCore : class, IEntity<TKey>
{
    public TKey Id { get; init; } = default!;
}
