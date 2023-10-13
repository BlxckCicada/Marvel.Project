using AutoMapper;
using Marvel.Project.API.Models;
using Marvel.Project.API.Queries;
using Marvel.Project.Api.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Marvel.Project.API.Handlers;

public class GetEntitiesRequestHandler<TModel, TKey> :
IRequestHandler<GetEntitiesRequest<TModel, TKey>, IList<TModel>>
where TModel : class, IModel<TKey>

{
    private readonly IMapper mapper;
    private readonly IQueryRepository query;
    public GetEntitiesRequestHandler(IQueryRepository query, IMapper mapper)
    {
        this.query = query;
        this.mapper = mapper;
    }
    public async Task<IList<TModel>> Handle(GetEntitiesRequest<TModel, TKey> request, CancellationToken cancellationToken)
    {
        var entities = await query.Query<TModel>().ToListAsync(cancellationToken);
        return entities.Select(entity => mapper.Map<TModel>(entity)).ToList();
    }
}