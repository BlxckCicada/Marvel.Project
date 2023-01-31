using AutoMapper;
using Marvel.Project.API.Models;
using Marvel.Project.API.Queries;
using Marvel.Project.Core.Data;
using Marvel.Project.Core.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Marvel.Project.API.Handlers;

public class GetEntitiesRequestHandler<TModel, TKey, TCore> :
IRequestHandler<GetEntitiesRequest<TModel, TKey, TCore>, IList<TModel>>
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
    public async Task<IList<TModel>> Handle(GetEntitiesRequest<TModel, TKey, TCore> request, CancellationToken cancellationToken)
    {
        var entities = await query.Query<TCore>().ToListAsync(cancellationToken);
        return entities.Select(entity => mapper.Map<TModel>(entity)).ToList();
    }
}