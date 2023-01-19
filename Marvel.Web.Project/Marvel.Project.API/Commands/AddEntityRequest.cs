using Marvel.Project.API.Models;
using Marvel.Project.Core.Entities;
using MediatR;

namespace Marvel.Project.API.Commands;


public record AddEntityRequest<TModel, TKey, TCore> : IRequest<CommandResponse<TModel>>
where TModel:class, IModel<TKey>
where TCore:class, IEntity<TKey>
{
    public TModel Entity { get; set; } = default!;
}

