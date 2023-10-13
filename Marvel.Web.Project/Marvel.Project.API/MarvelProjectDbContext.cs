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

        modelBuilder.Entity<HeroMovie>().HasKey(hm => new { hm.HeroId, hm.MovieId });
        modelBuilder.Entity<HeroMovie>().HasOne(hm => hm.Hero).WithMany(hm => hm.Movies).HasForeignKey(hm => hm.HeroId);
        modelBuilder.Entity<HeroMovie>().HasOne(hm => hm.Movie).WithMany(hm => hm.Heroes).HasForeignKey(hm => hm.MovieId);


        modelBuilder.Entity<VillainMovie>().HasKey(hm => new { hm.VillainId, hm.MovieId });
        modelBuilder.Entity<VillainMovie>().HasOne(hm => hm.Villain).WithMany(hm => hm.Movies).HasForeignKey(hm => hm.VillainId);
        modelBuilder.Entity<VillainMovie>().HasOne(hm => hm.Movie).WithMany(hm => hm.Villains).HasForeignKey(hm => hm.MovieId);
    }

    public T AddOne<T>(T entity) where T : class, IModel
    {
        return this.Set<T>().Add(entity).Entity;
    }

    public IQueryable<T> Query<T>() where T : class, IModel
    {
        // Type type = typeof(T);
        // if (typeof(Hero).IsAssignableFrom(type))
        // {


        //     return this.Set<T>().Include(nameof(Hero.Movies));
        // }
        // if (typeof(Villain).IsAssignableFrom(type))
        // {
        //     return this.Set<T>().Include(nameof(Hero.FeaturedMovies));
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
