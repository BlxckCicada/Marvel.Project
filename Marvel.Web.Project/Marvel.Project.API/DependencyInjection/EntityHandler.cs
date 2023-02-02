namespace Marvel.Project.Api.DependencyInjection;

using Marvel.Project.API.Commands;
using Marvel.Project.API.Handlers;
using Marvel.Project.API.Models;
using Marvel.Project.API.Queries;
using MediatR;

internal static class IServiceCollectionExtensions
{
    public static IServiceCollection AddEntityHandlers(this IServiceCollection services, bool replaceExistingImplementations = false)
    {
        // TODO: Map all generic entity handlers here
        return services
            .AddEntityHandlers<Hero, Guid, Core.Entities.Hero>(replaceExistingImplementations)
            .AddEntityHandlers<Villain, Guid, Core.Entities.Villain>(replaceExistingImplementations)
            .AddEntityHandlers<HeroMovie, Guid, Core.Entities.HeroMovie>(replaceExistingImplementations)
            .AddEntityHandlers<HeroFeaturedMovie, Guid, Core.Entities.HeroFeaturedMovie>(replaceExistingImplementations)
            .AddEntityHandlers<VillainFeaturedMovie, Guid, Core.Entities.VillainFeaturedMovie>(replaceExistingImplementations)
            .AddEntityHandlers<Movie, Guid, Core.Entities.Movie>(replaceExistingImplementations)
            .AddEntityHandlers<FeaturedMovie, Guid, Core.Entities.FeaturedMovie>(replaceExistingImplementations);
    }


    public static IServiceCollection AddEntityHandlers<TModel, TKey, TCore>(this IServiceCollection services, bool replaceExistingImplementations = false)
        where TModel : class, IModel<TKey>
        where TCore : class, Core.Entities.IEntity<TKey>
    {
        var modelType = typeof(TModel);
        var keyType = typeof(TKey);
        var coreType = typeof(TCore);

        foreach (var definition in EntityHandlerDefinitions)
        {
            var serviceType = definition.BuildServiceType(modelType, keyType, coreType);

            var duplicate = services.FirstOrDefault(d => d.ServiceType == serviceType);
            if (duplicate != null && !replaceExistingImplementations)
            {
                continue;
            }

            if (duplicate != null)
            {
                services.Remove(duplicate);
            }

            var implementationType = definition.BuildImplementationType(modelType, keyType, coreType);
            var descriptor = new ServiceDescriptor(serviceType, implementationType, ServiceLifetime.Scoped);
            services.Add(descriptor);
        }

        return services;
    }

    private class EntityHandlerDefinition
    {
        public EntityHandlerDefinition(Type handlerType, Type requestType, Type? responseType = null)
        {
            this.handlerType = handlerType;
            this.requestType = requestType;
            this.responseType = responseType;
        }

        private static readonly Type GenericHandlerType = typeof(IRequestHandler<,>);
        private readonly Type handlerType;
        private readonly Type requestType;
        private readonly Type? responseType;

        public Type BuildServiceType(Type modelType, Type keyType, Type coreType)
        {
            // Use the model type as the response type if not provided
            if (this.responseType == null)
            {
                return GenericHandlerType.MakeGenericType(this.requestType.MakeGenericType(modelType, keyType, coreType), modelType);
            }

            if (!this.responseType.IsGenericTypeDefinition)
            {
                // Use the actual response type if it is not a generic type definition
                return GenericHandlerType.MakeGenericType(this.requestType.MakeGenericType(modelType, keyType, coreType), this.responseType);
            }

            // Otherwise assume a single generic argument
            return GenericHandlerType.MakeGenericType(this.requestType.MakeGenericType(modelType, keyType, coreType), this.responseType.MakeGenericType(modelType));
        }

        public Type BuildImplementationType(Type modelType, Type keyType, Type coreType)
        {
            return this.handlerType.MakeGenericType(modelType, keyType, coreType);
        }
    }

    private static readonly EntityHandlerDefinition[] EntityHandlerDefinitions = new EntityHandlerDefinition[]
    {
         new EntityHandlerDefinition(typeof(AddEntityRequestHandler<,,>), typeof(AddEntityRequest<,,>), typeof(CommandResponse<>)),
        new EntityHandlerDefinition(typeof(DeleteEntityRequestHandler<,,>), typeof(DeleteEntityRequest<,,>), typeof(CommandResponse<>)),
        new EntityHandlerDefinition(typeof(GetEntitiesRequestHandler<,,>), typeof(GetEntitiesRequest<,,>), typeof(IList<>)),
        new EntityHandlerDefinition(typeof(GetEntityByIdRequestHandler<,,>), typeof(GetEntityByIdRequest<,,>)),
        new EntityHandlerDefinition(typeof(UpdateEntityRequestHandler<,,>), typeof(UpdateEntityRequest<,,>), typeof(CommandResponse<>)),
    };
}



