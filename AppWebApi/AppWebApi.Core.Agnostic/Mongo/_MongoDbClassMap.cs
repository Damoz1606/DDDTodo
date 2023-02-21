using MongoDB.Bson.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppWebApi.Core.Agnostic.Mongo
{
    public abstract class _MongoDbClassMap<T>
    {
        protected _MongoDbClassMap()
        {
            if (!BsonClassMap.IsClassMapRegistered(typeof(T))
                BsonClassMap.RegisterClassMap<T>(Map);
        }

        public abstract void Map(BsonClassMap<T> map);
    }
}
