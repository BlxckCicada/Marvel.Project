using Marvel.Project.API.Models;
using MediatR;

namespace Marvel.Project.API.Commands;


public record AddEntityRequest<TModel, TKey> : IRequest<CommandResponse<TModel>>
where TModel:class, IModel<TKey>
{
    public TModel Entity { get; set; } = default!;
}
