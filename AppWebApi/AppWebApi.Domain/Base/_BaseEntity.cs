using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppWebApi.Domain.Base
{
    public abstract class _BaseEntity
    {
        public _BaseEntity() {}
    }

    public abstract class _BaseEntity<TKey>
        where TKey : class
    {
        private TKey? _id;
        public TKey? Id { get => this._id; set => this._id = value; }

        protected _BaseEntity(TKey? id)
        {
            Id = id;
        }
    }
}
