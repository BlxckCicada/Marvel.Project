namespace Marvel.Project.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

public class MarvelProjectDbContextFactory : IDesignTimeDbContextFactory<MarvelProjectDbContext>
{

    public MarvelProjectDbContext CreateDbContext(string[] args)
    {
        // string server = Environment.GetEnvironmentVariable("DB_SERVER") ?? "";
        // string user = Environment.GetEnvironmentVariable("DB_USER") ?? "";
        // string password = Environment.GetEnvironmentVariable("DB_SA_PASSWORD") ?? "";
        // string database = Environment.GetEnvironmentVariable("DB_HOST") ?? "";
        string DefaultConnectionString = Environment.GetEnvironmentVariable("CONNECTION_STRING") ?? "Server=tcp:marveldb.database.windows.net,1433;Initial Catalog=marveldb;Persist Security Info=False;User ID=sysadmin;Password=Amogelang#5;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
        // string DefaultConnectionString = "Server=localhost;Initial Catalog=marveldb;User Id=sa;Password=Amogelang#5;TrustServerCertificate=True";
        // string DefaultConnectionString = $"Server={server};Database={database};User Id={user};Password={password};TrustServerCertificate=True";
        // const string DefaultConnectionString = "Server=.;Database=MarvelDb;Integrated Security=True;TrustServerCertificate=True";
        var optionsBuilder = new DbContextOptionsBuilder<MarvelProjectDbContext>();
        optionsBuilder.UseSqlServer(DefaultConnectionString);
        

        return new MarvelProjectDbContext(optionsBuilder.Options);
    }
}
