using AppWebApi.Domain.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppWebApi.Domain.Entities
{
    public class ToDo: _BaseEntity<string>
    {
        private string? _title;
        private string _description;
        private string? _author;
        private bool _isDone;
        private DateTime _createDate;

        public ToDo(string id, string? title, string description, string? author, bool isDone, DateTime createDate)
            : base(id)
        {
            Title = title;
            Description = description;
            Author = author;
            IsDone = isDone;
            CreateDate = createDate;
        }

        public DateTime CreateDate { get => _createDate; set => _createDate = value; }
        public bool IsDone { get => _isDone; set => _isDone = value; }
        public string? Author { get => _author; set => _author = value; }
        public string Description { get => _description; set => _description = value; }
        public string? Title { get => _title; set => _title = value; }
    }
}
