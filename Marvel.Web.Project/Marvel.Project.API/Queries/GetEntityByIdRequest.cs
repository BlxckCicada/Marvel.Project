
namespace Marvel.Project.API.Queries;
using Marvel.Project.API.Models;
using MediatR;

public record GetEntityByIdRequest<TModel, TKey> : IRequest<TModel>
where TModel : class, IModel<TKey>
{
    public TKey Id { get; init; } = default!;
}
