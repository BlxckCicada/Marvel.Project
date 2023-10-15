

using Marvel.Project.API.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Marvel.Project.API.Controllers;

[ApiController]
[Route("movie")]
public class MovieController : EntityControllerBase<Movie, Guid>
{

    public MovieController(IMediator mediator) : base(mediator) { }
}