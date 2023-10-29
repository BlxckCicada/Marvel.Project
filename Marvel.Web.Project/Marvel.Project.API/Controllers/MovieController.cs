

using Marvel.Project.API.Commands;
using Marvel.Project.API.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Marvel.Project.API.Controllers;

[ApiController]
[Route("movie")]
public class MovieController : EntityControllerBase<Movie, Guid>
{

    public MovieController(IMediator mediator) : base(mediator) { }

    [HttpPost("list")]
    public virtual async Task<IActionResult> AddMovies([FromBody] List<Movie> entities, CancellationToken cancellationToken)
    {
        foreach (Movie entity in entities)
        {
            var response = await mediator.Send(new AddEntityRequest<Movie, Guid>
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
    public virtual async Task<IActionResult> UpdateMovies([FromBody] List<Movie> entities, CancellationToken cancellationToken)
    {
        foreach (Movie entity in entities)
        {
            if (entity == null)
            {
                throw new BadHttpRequestException("Entity is null");
            }
            var response = await mediator.Send(new UpdateEntityRequest<Movie, Guid>()
            {
                Id = entity.Id,
                Entity = entity
            }, cancellationToken);
        }
        return Ok();
    }

}