using AppWebApi.Domain.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppWebApi.Domain.Interfaces
{
    public interface IRepository<TEntity, TKey>
        where TEntity : _BaseEntity<TKey>
        where TKey : class
    {
        Task<List<TEntity>> FindAll();
        Task<TEntity> Find(TKey key);
        Task Create(TEntity body);
        Task Update(TKey key, TEntity body);
        Task Delete(TKey key);

    }
}
