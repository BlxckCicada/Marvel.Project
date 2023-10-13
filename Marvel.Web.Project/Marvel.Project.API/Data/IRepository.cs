namespace Marvel.Project.Api.Data;

using System.Linq;
using System.Threading.Tasks;
using Marvel.Project.API.Models;

public interface IQueryRepository
{
    IQueryable<T> Query<T>()
        where T : class, IModel;
}

public interface ICommandRepository
{
    T AddOne<T>(T entity)
        where T : class, IModel;

    T RemoveOne<T>(T entity)
        where T : class, IModel;

    T UpdateOne<T>(T entity)
        where T : class, IModel;

    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}

public interface IRepository : IQueryRepository, ICommandRepository
{
}