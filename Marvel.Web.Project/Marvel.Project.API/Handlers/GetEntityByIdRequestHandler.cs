using System.Linq;
using AutoMapper;
using Marvel.Project.API.Models;
using Marvel.Project.API.Queries;
using Marvel.Project.Core.Data;
using Marvel.Project.Core.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Marvel.Project.API.Handlers;

public record GetEntityByIdRequestHandler<TModel, TKey, TCore> : IRequestHandler<GetEntityByIdRequest<TModel, TKey, TCore>, TModel>
where TModel : class, IModel<TKey>
where TCore : class, IEntity<TKey>
 where TKey : IEquatable<TKey>
{
    private readonly IQueryRepository query;
    private readonly IMapper mapper;
    public GetEntityByIdRequestHandler(IQueryRepository query, IMapper mapper)
    {
        this.query = query;
        this.mapper = mapper;

    }
    public async Task<TModel> Handle(GetEntityByIdRequest<TModel, TKey, TCore> request, CancellationToken cancellationToken)
    {
        var entity = await query.Query<TCore>().SingleOrDefaultAsync(x => x.Id.Equals(request.Id), cancellationToken);
        return mapper.Map<TModel>(entity);
    }
}