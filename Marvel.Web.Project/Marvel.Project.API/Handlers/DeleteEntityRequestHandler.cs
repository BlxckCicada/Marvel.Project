using AutoMapper;
using Marvel.Project.API.Commands;
using Marvel.Project.API.Models;
using Marvel.Project.Core.Data;
using Marvel.Project.Core.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Marvel.Project.API.Handlers;

public record DeleteEntityRequestHandler<TModel, TKey, TCore> : IRequestHandler<DeleteEntityRequest<TModel, TKey, TCore>, CommandResponse<TModel>>
where TModel : class, IModel<TKey>
where TCore : class, IEntity<TKey>
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

    public async Task<CommandResponse<TModel>> Handle(DeleteEntityRequest<TModel, TKey, TCore> request, CancellationToken cancellationToken)
    {
        var entity = await query.Query<TCore>().SingleOrDefaultAsync(x => x.Id.Equals(request.Id), cancellationToken);
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