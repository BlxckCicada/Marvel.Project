

using Marvel.Project.API.Models;

namespace Marvel.Project.API.Commands;

public interface IModelGenerateIdentityKey<TKey>
{

 TModel GenerateKey<TModel>(TModel entity) where TModel: IModel<TKey>;
}