
using Marvel.Project.API.Models;

public record CommandResponse<TModel>
{
    public TModel? Entity { get; set; }
}