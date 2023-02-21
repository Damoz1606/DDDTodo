using System.Reflection;

namespace AppWebApi.Core.Agnostic.Mongo
{
    public static class MongoDomainMapRegistrator
    {
        public static void RegisterDocumentMaps()
        {
            var assembly = Assembly.GetAssembly(typeof(MongoDomainMapRegistrator));

            var classMaps = assembly.GetTypes()
                .Where(t => t.BaseType != null && t.BaseType.IsGenericType &&
                t.BaseType.GetGenericTypeDefinition() == typeof(_MongoDbClassMap<>));

            foreach (var classMap in classMaps)
                Activator.CreateInstance(classMap);
        }
    }
}
