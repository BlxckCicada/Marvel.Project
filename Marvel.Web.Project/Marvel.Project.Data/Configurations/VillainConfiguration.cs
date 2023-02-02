namespace Marvel.Project.Data.Configurations;
using Marvel.Project.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

internal class VillainConfiguration : IEntityTypeConfiguration<Villain>
{
    public void Configure(EntityTypeBuilder<Villain> builder)
    {
        builder.ToTable("Villains");
    }
}
