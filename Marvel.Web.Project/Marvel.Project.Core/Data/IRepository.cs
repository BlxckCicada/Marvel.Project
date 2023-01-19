namespace Marvel.Project.Core.Data;

using System.Linq;
using System.Threading.Tasks;
using Marvel.Project.Core.Entities;

public interface IQueryRepository
{
    IQueryable<T> Query<T>()
        where T : class, IEntity;
}

public interface ICommandRepository
{
    T AddOne<T>(T entity)
        where T : class, IEntity;

    T RemoveOne<T>(T entity)
        where T : class, IEntity;

    T UpdateOne<T>(T entity)
        where T : class, IEntity;

    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}

public interface IRepository : IQueryRepository, ICommandRepository
{
}