namespace Marvel.Project.Data.Configurations;
using Marvel.Project.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

internal class HeroFeaturedMovieConfiguration : IEntityTypeConfiguration<HeroFeaturedMovie>
{
    public void Configure(EntityTypeBuilder<HeroFeaturedMovie> builder)
    {
        builder.ToTable("HeroFeaturedMovie");
    }
}
