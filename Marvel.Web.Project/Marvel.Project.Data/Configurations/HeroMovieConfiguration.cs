namespace Marvel.Project.Data.Configurations;
using Marvel.Project.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

internal class HeroMovieConfiguration : IEntityTypeConfiguration<HeroMovie>
{
    public void Configure(EntityTypeBuilder<HeroMovie> builder)
    {
        builder.ToTable("HeroMovie");
    }
}
