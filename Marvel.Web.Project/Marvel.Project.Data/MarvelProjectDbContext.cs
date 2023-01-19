namespace Marvel.Project.Data;

using System.Linq;
using System.Reflection;
using Marvel.Project.Core;
using Marvel.Project.Core.Data;
using Marvel.Project.Core.Entities;
using Microsoft.EntityFrameworkCore;

public class MarvelProjectDbContext : DbContext, IRepository
{
    public MarvelProjectDbContext(DbContextOptions<MarvelProjectDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(MarvelProjectDbContext).Assembly);
    }

    public T AddOne<T>(T entity) where T : class, IEntity
    {
        return this.Set<T>().Add(entity).Entity;
    }

    public IQueryable<T> Query<T>() where T : class, IEntity
    {
        return this.Set<T>();
    }

    public T RemoveOne<T>(T entity) where T : class, IEntity
    {
        return this.Set<T>().Remove(entity).Entity;
    }

    public T UpdateOne<T>(T entity) where T : class, IEntity
    {
        return this.Set<T>().Update(entity).Entity;
    }
}
