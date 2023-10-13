using Marvel.Project.API.Models;
using AutoMapper;

public class DefaultProfile : Profile
{
   public  DefaultProfile()
    {
        CreateMap<Hero, Hero>().ReverseMap();
        CreateMap<Villain, Villain>().ReverseMap();
        CreateMap<Movie, Movie>().ReverseMap();
        CreateMap<HeroMovie, HeroMovie>().ReverseMap();
        CreateMap<VillainMovie, VillainMovie>().ReverseMap();


    }

}