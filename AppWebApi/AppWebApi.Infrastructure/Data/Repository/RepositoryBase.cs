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

        public async Task Create(TEntity body)
        {
            await this._collection.InsertOneAsync(body);
        }

        public async Task Delete(TKey key)
        {
            await this._collection.FindOneAndDeleteAsync(x => x.Id == key);
        }

        public async Task<TEntity> Find(TKey key)
        {
            return await this._collection.Find(x => x.Id == key).FirstOrDefaultAsync();
        }

        public async Task<List<TEntity>> FindAll()
        {
            return await this._collection.Find(_ => true).ToListAsync();
        }

        public async Task Update(TKey key, TEntity body)
        {
            await this._collection.FindOneAndReplaceAsync(x => x.Id == key, body);
        }
    }
}
