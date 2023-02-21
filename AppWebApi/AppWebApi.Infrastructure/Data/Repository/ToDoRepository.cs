using AppWebApi.Core.Agnostic.Mongo;
using AppWebApi.Domain.Entities;
using AppWebApi.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppWebApi.Infrastructure.Data.Repository
{
    public class ToDoRepository :
        RepositoryBase<ToDo, string>,
        IToDoRepository
    {
        public ToDoRepository(IMongoContext<IMongoConnection, ToDo> context) : base(context)
        {
        }
    }
}
