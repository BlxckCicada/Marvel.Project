namespace Marvel.Project.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

public class MarvelProjectDbContextFactory : IDesignTimeDbContextFactory<MarvelProjectDbContext>
{

    public MarvelProjectDbContext CreateDbContext(string[] args)
    {

        string DefaultConnectionString = Environment.GetEnvironmentVariable("CONNECTION_STRING") ?? "Data Source=../sqlite/marvel.db";
        var optionsBuilder = new DbContextOptionsBuilder<MarvelProjectDbContext>();
        optionsBuilder.UseSqlite(DefaultConnectionString);


        return new MarvelProjectDbContext(optionsBuilder.Options);
    }
}
