

using Marvel.Project.API.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Marvel.Project.API.Controllers;


[ApiController]
[Route("villains")]
public class VillainController : EntityControllerBase<Villain, Guid>
{
    public VillainController(IMediator mediator) : base(mediator)
    {

    }


}