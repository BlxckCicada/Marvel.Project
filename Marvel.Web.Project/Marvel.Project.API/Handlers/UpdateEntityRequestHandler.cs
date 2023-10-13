using AutoMapper;
using Marvel.Project.API.Commands;
using Marvel.Project.API.Models;
using Marvel.Project.Api.Data;
using MediatR;

namespace Marvel.Project.API.Handlers;


public record UpdateEntityRequestHandler<TModel, TKey> : IRequestHandler<UpdateEntityRequest<TModel, TKey>, CommandResponse<TModel>>
where TModel : class, IModel<TKey>
{

    private readonly ICommandRepository command;
    private readonly IMapper mapper;

    public UpdateEntityRequestHandler(ICommandRepository command, IMapper mapper)
    {
        this.mapper = mapper;
        this.command = command;
    }
    public async Task<CommandResponse<TModel>> Handle(UpdateEntityRequest<TModel, TKey> request, CancellationToken cancellationToken)
    {
        var entity = request.Entity;
        var updatedEntity = command.UpdateOne<TModel>(mapper.Map<TModel>(entity));
        await command.SaveChangesAsync(cancellationToken);

        return new CommandResponse<TModel>
        {
            Entity = mapper.Map<TModel>(entity)
        };

    }
}