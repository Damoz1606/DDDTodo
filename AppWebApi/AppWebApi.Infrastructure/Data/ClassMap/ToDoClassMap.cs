using AppWebApi.Core.Agnostic.Mongo;
using AppWebApi.Domain.Entities;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.IdGenerators;
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
            map.MapIdMember(x => x.Id);
            map.MapMember(x => x.Title).SetIsRequired(false);
            map.MapMember(x => x.Author).SetIsRequired(false);
            map.MapMember(x => x.Description).SetIsRequired(true);
            map.MapMember(x => x.IsDone).SetIsRequired(false).SetDefaultValue(false);
            map.MapMember(x => x.CreateDate).SetIsRequired(false).SetDefaultValue(DateTime.UtcNow);
        }
    }
}
