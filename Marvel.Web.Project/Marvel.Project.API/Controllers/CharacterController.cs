

using Marvel.Project.API.Commands;
using Marvel.Project.API.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Marvel.Project.API.Controllers;


[ApiController]
[Route("character")]
public class CharacterController : EntityControllerBase<Character, Guid>
{
    public CharacterController(IMediator mediator) : base(mediator)
    {

    }

    [HttpPost("list")]
    public virtual async Task<IActionResult> AddCharacters([FromBody] List<Character> entities, CancellationToken cancellationToken)
    {
        foreach (Character entity in entities)
        {
            var response = await mediator.Send(new AddEntityRequest<Character, Guid>
            {
                Entity = entity,

            }, cancellationToken);

            if (response.Entity == null)
            {
                return Problem();
            }
            // return CreatedAtAction(nameof(Get), new { Id = response.Entity.Id }, response.Entity);
        }

        return Ok();

    }

    [HttpPut("list")]
    public virtual async Task<IActionResult> UpdateCharacters([FromBody] List<Character> entities, CancellationToken cancellationToken)
    {
        foreach (Character entity in entities)
        {
            if (entity == null)
            {
                throw new BadHttpRequestException("Entity is null");
            }
            var response = await mediator.Send(new UpdateEntityRequest<Character, Guid>()
            {
                Id = entity.Id,
                Entity = entity
            }, cancellationToken);
        }
        return Ok();
    }




}