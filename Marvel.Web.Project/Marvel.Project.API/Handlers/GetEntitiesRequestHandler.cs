using AutoMapper;
using Marvel.Project.API.Models;
using Marvel.Project.API.Queries;
using Marvel.Project.Core.Data;
using Marvel.Project.Core.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Marvel.Project.API.Handlers;

public class GetEntitiesRequestHandler<TModel, TKey, TCore> :
IRequestHandler<GetEntitiesRequest<TModel, TKey, TCore>, QueryEntitiesResponse<TModel>>
where TModel : class, IModel<TKey>
where TCore : class, IEntity<TKey>
{
    private readonly IMapper mapper;
    private readonly IQueryRepository query;
    public GetEntitiesRequestHandler(IQueryRepository query, IMapper mapper)
    {
        this.query = query;
        this.mapper = mapper;
    }
    public async Task<QueryEntitiesResponse<TModel>> Handle(GetEntitiesRequest<TModel, TKey, TCore> request, CancellationToken cancellationToken)
    {
        var entityQuery = query.Query<TCore>();
        var entities = await entityQuery.ToListAsync(cancellationToken);

        return new QueryEntitiesResponse<TModel>
        {
            Entities = entities.Select(entity => mapper.Map<TModel>(entity)).ToList(),
        };
    }
}