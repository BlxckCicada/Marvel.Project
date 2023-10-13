using Marvel.Project.API.Models;
using MediatR;

namespace Marvel.Project.API.Commands;

public record DeleteEntityRequest<TModel, TKey> : IRequest<CommandResponse<TModel>>
where TModel : class, IModel<TKey>
{
    public TKey Id { get; init; } = default!;
}
