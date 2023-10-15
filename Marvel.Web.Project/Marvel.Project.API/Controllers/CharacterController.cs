

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


}