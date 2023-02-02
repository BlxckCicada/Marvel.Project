
using Marvel.Project.API.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Marvel.Project.API.Controllers;

[ApiController]
[Route("villains/movies/featured")]
public class VillainFeaturedMovieController : EntityControllerBase<VillainFeaturedMovie, Guid, Core.Entities.VillainFeaturedMovie>
{
    public VillainFeaturedMovieController(IMediator mediator) : base(mediator) { }
}