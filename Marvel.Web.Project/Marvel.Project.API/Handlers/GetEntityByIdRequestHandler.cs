using AutoMapper;
using Marvel.Project.API.Models;
using Marvel.Project.API.Queries;
using Marvel.Project.Api.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Marvel.Project.API.Handlers;

public record GetEntityByIdRequestHandler<TModel, TKey> : IRequestHandler<GetEntityByIdRequest<TModel, TKey>, TModel>
where TModel : class, IModel<TKey>

 where TKey : IEquatable<TKey>
{
    private readonly IQueryRepository query;
    private readonly IMapper mapper;
    public GetEntityByIdRequestHandler(IQueryRepository query, IMapper mapper)
    {
        this.query = query;
        this.mapper = mapper;

    }
    public async Task<TModel> Handle(GetEntityByIdRequest<TModel, TKey> request, CancellationToken cancellationToken)
    {
        var entity = await query.Query<TModel>().SingleOrDefaultAsync(x => x.Id.Equals(request.Id), cancellationToken);
        return mapper.Map<TModel>(entity);
    }
}