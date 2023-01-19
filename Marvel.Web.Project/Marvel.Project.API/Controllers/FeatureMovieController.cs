

using Marvel.Project.API.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Marvel.Project.API.Controllers;

[ApiController]
[Route("movies/featured")]
public class FeaturedMovieController : EntityControllerBase<FeaturedMovie, Guid, Core.Entities.FeaturedMovie>
{

    public FeaturedMovieController(IMediator mediator) : base(mediator) { }
}