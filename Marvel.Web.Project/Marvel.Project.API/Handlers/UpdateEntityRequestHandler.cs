using AutoMapper;
using Marvel.Project.API.Commands;
using Marvel.Project.API.Models;
using Marvel.Project.Core.Data;
using Marvel.Project.Core.Entities;
using MediatR;

namespace Marvel.Project.API.Handlers;


public record UpdateEntityRequestHandler<TModel, TKey, TCore> : IRequestHandler<UpdateEntityRequest<TModel, TKey, TCore>, CommandResponse<TModel>>
where TModel : class, IModel<TKey>
where TCore : class, IEntity<TKey>
{

    private readonly ICommandRepository command;
    private readonly IMapper mapper;

    public UpdateEntityRequestHandler(ICommandRepository command, IMapper mapper)
    {
        this.mapper = mapper;
        this.command = command;
    }
    public async Task<CommandResponse<TModel>> Handle(UpdateEntityRequest<TModel, TKey, TCore> request, CancellationToken cancellationToken)
    {
        var entity = request.Entity;
        var updatedEntity = command.UpdateOne<TCore>(mapper.Map<TCore>(entity));
        await command.SaveChangesAsync(cancellationToken);

        return new CommandResponse<TModel>
        {
            Entity = mapper.Map<TModel>(entity)
        };

    }
}