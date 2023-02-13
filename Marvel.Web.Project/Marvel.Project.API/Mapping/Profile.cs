using Marvel.Project.API.Models;
using AutoMapper;

public class DefaultProfile : Profile
{
   public  DefaultProfile()
    {
        CreateMap<Marvel.Project.Core.Entities.Hero, Hero>().ReverseMap();
        CreateMap<Marvel.Project.Core.Entities.Villain, Villain>().ReverseMap();
        CreateMap<Marvel.Project.Core.Entities.Movie, Movie>().ReverseMap();
        CreateMap<Marvel.Project.Core.Entities.HeroMovie, HeroMovie>().ReverseMap();
        CreateMap<Marvel.Project.Core.Entities.VillainMovie, VillainMovie>().ReverseMap();

        
    }

}