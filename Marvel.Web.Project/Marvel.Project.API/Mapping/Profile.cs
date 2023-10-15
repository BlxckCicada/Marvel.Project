using Marvel.Project.API.Models;
using AutoMapper;

public class DefaultProfile : Profile
{
   public  DefaultProfile()
    {
        CreateMap<Character, Character>().ReverseMap();

        CreateMap<Movie, Movie>().ReverseMap();
        _ = CreateMap<CharacterMovie, CharacterMovie>().ReverseMap();


    }

}