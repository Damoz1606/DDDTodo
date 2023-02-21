using AppWebApi.Core.Agnostic.Mongo;
using AppWebApi.Domain.Entities;
using MongoDB.Bson.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppWebApi.Infrastructure.Data.ClassMap
{
    internal class ToDoClassMap : _MongoDbClassMap<ToDo>
    {
        public override void Map(BsonClassMap<ToDo> map)
        {
            map.AutoMap();
            map.MapIdField(x => x.Id);
            map.MapField(x => x.Title).SetIsRequired(false);
            map.MapField(x => x.Author).SetIsRequired(false);
            map.MapField(x => x.Description).SetIsRequired(true);
            map.MapField(x => x.IsDone).SetIsRequired(false).SetDefaultValue(false);
            map.MapField(x => x.CreateDate).SetIsRequired(false).SetDefaultValue(DateTime.UtcNow);
        }
    }
}
