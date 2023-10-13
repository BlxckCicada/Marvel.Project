using Marvel.Project.API.Models;
using MediatR;

namespace Marvel.Project.API.Commands;

public record UpdateEntityRequest<TModel, TKey> : IRequest<CommandResponse<TModel>>
where TModel : class, IModel<TKey>
{
    public TKey Id { get; set; } = default!;
    public TModel Entity { get; set; } = default!;
}