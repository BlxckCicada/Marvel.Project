namespace Marvel.Project.Data.Configurations;
using Marvel.Project.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

internal class VillainFeaturedMovieConfiguration : IEntityTypeConfiguration<VillainFeaturedMovie>
{
    public void Configure(EntityTypeBuilder<VillainFeaturedMovie> builder)
    {
        builder.ToTable("VillainFeaturedMovie");
    }
}
