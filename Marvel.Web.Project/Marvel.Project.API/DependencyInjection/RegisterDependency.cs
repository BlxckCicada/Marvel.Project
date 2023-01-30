

using Marvel.Project.API.Commands;
using Marvel.Project.API.Handlers;
using Marvel.Project.API.Queries;
using MediatR;
namespace Marvel.Project.API.DependencyInjection;
internal static class Register
{
    public static IServiceCollection RegisterHandlers(IServiceCollection services, Type modelType, Type entityType)
    {
        var handlerType = typeof(IRequestHandler<,>);
        var requestTypes = modelType.Assembly.GetExportedTypes()
            .Where(x => x.IsClass && x.GetInterfaces().Any(y => y.IsGenericType && y.GetGenericTypeDefinition() == handlerType));

        foreach (var requestType in requestTypes)
        {
            var requestInterface = requestType.GetInterfaces().First(x => x.IsGenericType && x.GetGenericTypeDefinition() == handlerType);
            var requestArguments = requestInterface.GetGenericArguments();
            var request = requestArguments[0];
            var response = requestArguments[1];

            if (request.IsGenericType)
            {
                var genericArguments = request.GetGenericArguments();
                var genericType = request.GetGenericTypeDefinition();

                if (genericType == typeof(AddEntityRequest<,,>))
                {
                    var serviceType = typeof(AddEntityRequestHandler<,,>).MakeGenericType(modelType, entityType, genericArguments[1]);
                    services.AddScoped(requestInterface, serviceType);
                }
                else if (genericType == typeof(DeleteEntityRequest<,,>))
                {
                    var serviceType = typeof(DeleteEntityRequestHandler<,,>).MakeGenericType(modelType, entityType, genericArguments[1]);
                    services.AddScoped(requestInterface, serviceType);
                }
                else if (genericType == typeof(GetEntitiesRequest<,,>))
                {
                    var serviceType = typeof(GetEntitiesRequestHandler<,,>).MakeGenericType(modelType, entityType, genericArguments[1]);
                    services.AddScoped(requestInterface, serviceType);
                }
                else if (genericType == typeof(GetEntityByIdRequest<,,>))
                {
                    var serviceType = typeof(GetEntityByIdRequestHandler<,,>).MakeGenericType(modelType, entityType, genericArguments[1]);
                    services.AddScoped(requestInterface, serviceType);
                }
                else if (genericType == typeof(UpdateEntityRequest<,,>))
                {
                    var serviceType = typeof(UpdateEntityRequestHandler<,,>).MakeGenericType(modelType, entityType, genericArguments[1]);
                    services.AddScoped(requestInterface, serviceType);
                }
            }
        }

        return services;
    }

}