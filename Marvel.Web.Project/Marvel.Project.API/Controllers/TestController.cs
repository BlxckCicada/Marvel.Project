using Microsoft.AspNetCore.Mvc;

namespace Marvel.Project.API.Controllers;



[ApiController]
[Route("test")]
public class TestController
{
    public TestController()
    {

    }

    [HttpGet]
    public string GetValue()
    {
        return "Hellow world";
    }

}