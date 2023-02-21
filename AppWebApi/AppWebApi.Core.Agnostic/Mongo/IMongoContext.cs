using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppWebApi.Core.Agnostic.Mongo
{
    public interface IMongoContext<TConnection, TEntity>
        where TConnection: IMongoConnection
        where TEntity : class
    {
        public IMongoCollection<TEntity> collection { get; }
        public IMongoDatabase Database { get; }

        void CreateConnection(TConnection connection);
    }
}
