namespace Marvel.Project.Data;

using System.Linq;
using Marvel.Project.Api.Data;
using Marvel.Project.API.Models;
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

        modelBuilder.Entity<CharacterMovie>().HasKey(hm => new { hm.CharacterId, hm.MovieId });


    }

    public T AddOne<T>(T entity) where T : class, IModel
    {
        return this.Set<T>().Add(entity).Entity;
    }

    public IQueryable<T> Query<T>() where T : class, IModel
    {
        // Type type = typeof(T);
        // if (typeof(Character).IsAssignableFrom(type))
        // {


        //     return this.Set<T>().Include(nameof(Character.Movies));
        // }
        // if (typeof(Villain).IsAssignableFrom(type))
        // {
        //     return this.Set<T>().Include(nameof(Character.FeaturedMovies));
        // }

        return this.Set<T>();

    }

    public T RemoveOne<T>(T entity) where T : class, IModel
    {
        return this.Set<T>().Remove(entity).Entity;
    }

    public T UpdateOne<T>(T entity) where T : class, IModel
    {
        return this.Set<T>().Update(entity).Entity;
    }
}
