using AutoMapper;
using Marvel.Project.API.Commands;
using Marvel.Project.API.Models;
using Marvel.Project.Core.Data;
using Marvel.Project.Core.Entities;
using MediatR;

namespace Marvel.Project.API.Handlers;

public record AddEntityRequestHandler<TModel, TKey, TCore> :
IRequestHandler<AddEntityRequest<TModel, TKey, TCore>, CommandResponse<TModel>>
where TModel : class, IModel<TKey>
where TCore : class, IEntity<TKey>
{
    private readonly ICommandRepository command;
    private readonly IQueryRepository query;
    private readonly IMapper mapper;
    private readonly IModelGenerateIdentityKey<TKey> generateKey;

    public AddEntityRequestHandler(IQueryRepository query, ICommandRepository command, IMapper mapper, IModelGenerateIdentityKey<TKey> generateKey)
    {
        this.mapper = mapper;
        this.command = command;
        this.generateKey = generateKey;
        this.query = query;
    }

    public async Task<CommandResponse<TModel>> Handle(AddEntityRequest<TModel, TKey, TCore> request, CancellationToken cancellationToken)
    {

        var entity = generateKey.GenerateKey(request.Entity);
        var addedEntity = command.AddOne<TCore>(mapper.Map<TCore>(request.Entity));
        await command.SaveChangesAsync(cancellationToken);

        return new CommandResponse<TModel>
        {
            Entity = mapper.Map<TModel>(addedEntity)
        };
    }
}