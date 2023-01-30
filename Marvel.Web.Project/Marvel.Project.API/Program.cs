using Marvel.Project.Core.Data;
using Marvel.Project.Data;
using Microsoft.EntityFrameworkCore;
using MediatR;
using Marvel.Project.API.Commands;
using Marvel.Project.API.Handlers;
using Marvel.Project.API.Models;
using Marvel.Project.Core.Entities;
using Marvel.Project.Api.DependencyInjection;
using Marvel.Project.API.Queries;

var builder = WebApplication.CreateBuilder(args);



// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("MarvelProject");
builder.Services.AddDbContext<MarvelProjectDbContext>(options => options.UseSqlServer(connectionString));
builder.Services.Add(new ServiceDescriptor(typeof(IRepository), typeof(MarvelProjectDbContext), ServiceLifetime.Scoped));
builder.Services.Add(new ServiceDescriptor(typeof(IQueryRepository), typeof(MarvelProjectDbContext), ServiceLifetime.Scoped));
builder.Services.Add(new ServiceDescriptor(typeof(ICommandRepository), typeof(MarvelProjectDbContext), ServiceLifetime.Scoped));
builder.Services.Add(new ServiceDescriptor(typeof(IModelGenerateIdentityKey<Guid>), typeof(GenerateIdentityKey), ServiceLifetime.Scoped));
builder.Services.AddMediatR(typeof(AddEntityRequestHandler<,,>));
builder.Services.AddMediatR(typeof(DeleteEntityRequestHandler<,,>));
builder.Services.AddMediatR(typeof(GetEntitiesRequestHandler<,,>));
builder.Services.AddMediatR(typeof(GetEntityByIdRequestHandler<,,>));
builder.Services.AddMediatR(typeof(UpdateEntityRequestHandler<,,>));

builder.Services.AddTransient(typeof(AddEntityRequestHandler<IModel<Guid>,Guid,IEntity<Guid>>));
builder.Services.AddTransient(typeof(DeleteEntityRequestHandler<IModel<Guid>,Guid,IEntity<Guid>>));
builder.Services.AddTransient(typeof(GetEntitiesRequestHandler<IModel<Guid>,Guid,IEntity<Guid>>));
builder.Services.AddTransient(typeof(GetEntityByIdRequestHandler<IModel<Guid>,Guid,IEntity<Guid>>));
builder.Services.AddTransient(typeof(UpdateEntityRequestHandler<IModel<Guid>,Guid,IEntity<Guid>>));


// builder.Services.AddMediatR(typeof(AddEntityRequestHandler<IModel<Guid>,Guid,IEntity<Guid>>));
// builder.Services.AddMediatR(typeof(DeleteEntityRequestHandler<IModel<Guid>,Guid,IEntity<Guid>>));
// builder.Services.AddMediatR(typeof(GetEntitiesRequestHandler<IModel<Guid>,Guid,IEntity<Guid>>));
// builder.Services.AddMediatR(typeof(GetEntityByIdRequestHandler<IModel<Guid>,Guid,IEntity<Guid>>));
// builder.Services.AddMediatR(typeof(UpdateEntityRequestHandler<IModel<Guid>,Guid,IEntity<Guid>>));


builder.Services.AddControllers();

builder.Services.AddAutoMapper(typeof(Program).Assembly);
builder.Services.AddMediatR(typeof(Program).Assembly);
// builder.Services.AddEntityHandlers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
