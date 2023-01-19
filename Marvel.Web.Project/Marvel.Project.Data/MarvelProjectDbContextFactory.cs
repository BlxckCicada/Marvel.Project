namespace Marvel.Project.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

public class MarvelProjectDbContextFactory : IDesignTimeDbContextFactory<MarvelProjectDbContext>
{
    public MarvelProjectDbContext CreateDbContext(string[] args)
    {
        const string DefaultConnectionString = "Server=.;Database=MarvelDb;Integrated Security=True;TrustServerCertificate=True";

        var optionsBuilder = new DbContextOptionsBuilder<MarvelProjectDbContext>();
        optionsBuilder.UseSqlServer(DefaultConnectionString);

        return new MarvelProjectDbContext(optionsBuilder.Options);
    }
}
