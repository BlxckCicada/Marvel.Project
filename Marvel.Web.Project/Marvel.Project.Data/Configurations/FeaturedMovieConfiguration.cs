namespace Marvel.Project.Data.Configurations;
using Marvel.Project.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

internal class FeaturedMovieConfiguration : IEntityTypeConfiguration<FeaturedMovie>
{
    public void Configure(EntityTypeBuilder<FeaturedMovie> builder)
    {
        builder.ToTable("FeaturedMovies");
    }
}
