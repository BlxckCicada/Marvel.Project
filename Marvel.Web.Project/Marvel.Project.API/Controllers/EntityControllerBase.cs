using System.Threading;
using Marvel.Project.API.Commands;
using Marvel.Project.API.Models;
using Marvel.Project.API.Queries;
using Marvel.Project.Core.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Marvel.Project.API.Controllers;


public class EntityControllerBase<TModel, Tkey, TCore> : ControllerBase
where TModel : class, IModel<Tkey>
where TCore : class, IEntity<Tkey>
{
    protected readonly IMediator mediator;

    public EntityControllerBase(IMediator mediator)
    {
        this.mediator = mediator;
    }

    [HttpGet]
    public virtual async Task<IActionResult> Add([FromBody] TModel entity, CancellationToken cancellationToken)
    {
        var response = await mediator.Send(new AddEntityRequest<TModel, Tkey, TCore>
        {
            Entity = entity,

        }, cancellationToken);

        if (response.Entity == null)
        {
            return Problem();
        }
        return CreatedAtAction(nameof(Get), new { Id = response.Entity.Id }, response.Entity);
    }

    [HttpGet]
    public virtual async Task<IActionResult> Get(CancellationToken cancellationToken)
    {
        var entities = await mediator.Send(new GetEntitiesRequest<TModel, Tkey, TCore>(), cancellationToken);
        return Ok(entities);
    }

    [HttpGet("{Id}")]
    public virtual async Task<TModel> GetEntityById(Tkey Id, CancellationToken cancellationToken)
    {
        var entity = await mediator.Send(new GetEntityByIdRequest<TModel, Tkey, TCore>()
        {
            Id = Id
        }, cancellationToken);
        if (entity == null)
        {
            throw new BadHttpRequestException($"Entity  with Id {Id} does not exists");
        }

        return entity;

    }


    [HttpPut("{Id}")]
    public virtual async Task<IActionResult> UpdateEntity(Tkey Id, [FromBody] TModel entity, CancellationToken cancellationToken)
    {
        if (entity == null)
        {
            throw new BadHttpRequestException("Entity is null");
        }
        var response = await mediator.Send(new UpdateEntityRequest<TModel, Tkey, TCore>()
        {
            Id = Id,
            Entity = entity
        }, cancellationToken);

        return Ok(response.Entity);
    }

    [HttpDelete("{Id}")]
    public virtual async Task<IActionResult> DeleteEntity(Tkey Id, CancellationToken cancellationToken)
    {
        var response = await mediator.Send(new DeleteEntityRequest<TModel, Tkey, TCore>() { Id = Id }, cancellationToken);

        return Ok(response);
    }

}