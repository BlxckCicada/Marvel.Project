
using Marvel.Project.API.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Marvel.Project.API.Controllers;

[ApiController]
[Route("heroes/movies/featured")]
public class HeroFeaturedMovieController : EntityControllerBase<HeroFeaturedMovie, Guid, Core.Entities.HeroFeaturedMovie>
{
    public HeroFeaturedMovieController(IMediator mediator) : base(mediator) { }
}