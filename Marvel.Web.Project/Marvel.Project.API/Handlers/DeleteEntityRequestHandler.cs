using AutoMapper;
using Marvel.Project.API.Commands;
using Marvel.Project.API.Models;
using Marvel.Project.Api.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Marvel.Project.API.Handlers;

public record DeleteEntityRequestHandler<TModel, TKey> : IRequestHandler<DeleteEntityRequest<TModel, TKey>, CommandResponse<TModel>>
where TModel : class, IModel<TKey>
 where TKey : IEquatable<TKey>
{

    private readonly IMapper mapper;
    private readonly ICommandRepository command;
    private readonly IQueryRepository query;

    public DeleteEntityRequestHandler(IMapper mapper, ICommandRepository command, IQueryRepository query)
    {
        this.mapper = mapper;
        this.command = command;
        this.query = query;
    }

    public async Task<CommandResponse<TModel>> Handle(DeleteEntityRequest<TModel, TKey> request, CancellationToken cancellationToken)
    {
        var entity = await query.Query<TModel>().SingleOrDefaultAsync(x => x.Id.Equals(request.Id), cancellationToken);
        if (entity == null)
        {
            return new CommandResponse<TModel>();
        }
        var removed = command.RemoveOne(entity);
        await command.SaveChangesAsync(cancellationToken);
        return new CommandResponse<TModel>
        {
            Entity = mapper.Map<TModel>(removed)
        };
    }
}