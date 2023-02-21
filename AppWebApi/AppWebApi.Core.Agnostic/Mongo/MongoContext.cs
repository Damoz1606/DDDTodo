using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppWebApi.Core.Agnostic.Mongo
{
    public class MongoContext<TConnection, TEntity> : IMongoContext<TConnection, TEntity>
        where TConnection : IMongoConnection
        where TEntity : class
    {
        private IMongoClient _client { get; set; }
        private IMongoDatabase _database { get; set; }

        public IMongoCollection<TEntity> collection =>
            this._database.GetCollection<TEntity>(typeof(TEntity).Name.ToLower());
        public IMongoDatabase Database =>
            this._database;

        public MongoContext(TConnection mongoConnection)
        {
            this.CreateConnection(mongoConnection);
        }

        public void CreateConnection(TConnection connection)
        {
            var url = new MongoUrl(connection.MongoStore());
            this._client = new MongoClient(url.Url);
            this._database = this._client.GetDatabase(url.DatabaseName);
        }

        void IMongoContext<TConnection, TEntity>.CreateConnection(TConnection connection)
        {
            throw new NotImplementedException();
        }
    }
}
