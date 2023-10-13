using AutoMapper;
using Marvel.Project.API.Commands;
using Marvel.Project.API.Models;
using Marvel.Project.Api.Data;
using MediatR;

namespace Marvel.Project.API.Handlers;

public record AddEntityRequestHandler<TModel, TKey> :
IRequestHandler<AddEntityRequest<TModel, TKey>, CommandResponse<TModel>>
where TModel : class, IModel<TKey>
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

    public async Task<CommandResponse<TModel>> Handle(AddEntityRequest<TModel, TKey> request, CancellationToken cancellationToken)
    {

        var entity = generateKey.GenerateKey(request.Entity);
        var addedEntity = command.AddOne<TModel>(mapper.Map<TModel>(request.Entity));
        await command.SaveChangesAsync(cancellationToken);

        return new CommandResponse<TModel>
        {
            Entity = mapper.Map<TModel>(addedEntity)
        };
    }
}