

using Marvel.Project.API.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Marvel.Project.API.Controllers;


[ApiController]
[Route("heroes")]
public class HeroController : EntityControllerBase<Hero, Guid>
{
    public HeroController(IMediator mediator) : base(mediator)
    {

    }


}