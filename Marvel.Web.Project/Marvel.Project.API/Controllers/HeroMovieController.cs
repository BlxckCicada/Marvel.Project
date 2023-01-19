

using Marvel.Project.API.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Marvel.Project.API.Controllers;

[ApiController]
[Route("heroes/movies")]
public class HeroMovieController : EntityControllerBase<HeroMovie, Guid, Core.Entities.HeroMovie>
{

    public HeroMovieController(IMediator mediator) : base(mediator) { }
}