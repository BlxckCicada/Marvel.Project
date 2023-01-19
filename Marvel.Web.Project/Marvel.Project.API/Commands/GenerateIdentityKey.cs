using Marvel.Project.API.Models;

namespace Marvel.Project.API.Commands;

public class GenerateIdentityKey : IModelGenerateIdentityKey<Guid>
{
    public TModel GenerateKey<TModel>(TModel entity)
     where TModel : IModel<Guid>
    {
        if (entity == null)
        {
            throw new Exception("Entity parsed is null");
        }

        entity.Id = Guid.NewGuid();
        return entity;
    }

}