using AppWebApi.Core.Agnostic.Mongo;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppWebApi.Infrastructure.Data
{
    public class MongoConnection : IMongoConnection
    {
        private IConfiguration _configuration;

        public MongoConnection(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string MongoStore(string name = "MongoStore")
        {
            if(this._configuration == null) throw new ArgumentNullException(nameof(this._configuration));
            string? connectionString = this._configuration[$"connectionString:{name}"];
            return connectionString == null ? "" : connectionString;
        }
    }
}
