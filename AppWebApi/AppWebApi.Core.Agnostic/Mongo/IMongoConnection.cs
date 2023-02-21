using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppWebApi.Core.Agnostic.Mongo
{
    public interface IMongoConnection
    {
        string MongoStore(string name = "MongoStore");
    }
}
