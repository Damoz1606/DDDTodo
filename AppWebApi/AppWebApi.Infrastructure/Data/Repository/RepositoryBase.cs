using AppWebApi.Core.Agnostic.Mongo;
using AppWebApi.Domain.Base;
using AppWebApi.Domain.Interfaces;
using MongoDB.Driver;

namespace AppWebApi.Infrastructure.Data.Repository
{
    public class RepositoryBase<TEntity, TKey>: IRepository<TEntity, TKey>
        where TEntity : _BaseEntity<TKey>
        where TKey : class
    {
        private readonly IMongoCollection<TEntity> _collection;

        public RepositoryBase(IMongoContext<IMongoConnection, TEntity> context)
        {
            this._collection = context.collection;
        }

        public Task Create(TEntity body)
        {
            this._collection.InsertOneAsync(body);
            return Task.CompletedTask;
        }

        public Task Delete(TKey key)
        {
            this._collection.FindOneAndDeleteAsync(x => x.Id == key);
            return Task.FromResult(true);
        }

        public Task<TEntity> Find(TKey key)
        {
            return this._collection.Find(x => x.Id == key).FirstOrDefaultAsync();
        }

        public Task<List<TEntity>> FindAll()
        {
            return this._collection.Find(_ => true).ToListAsync();
        }

        public Task Update(TKey key, TEntity body)
        {
            this._collection.FindOneAndReplaceAsync(x => x.Id == key, body);
            return Task.CompletedTask;
        }
    }
}
