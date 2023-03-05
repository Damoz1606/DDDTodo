using AppWebApi.Domain.Entities;
using AppWebApi.WebApi.DTOs;

namespace AppWebApi.WebApi.Mapper;

public static class ToDoMapper
{
    public static RSToDo map(ToDo todo)
    {
        var rs = new RSToDo();
        rs.Id = todo.Id;
        rs.Description = todo.Description;
        rs.Title = todo.Title;
        rs.IsDone = todo.IsDone;
        return rs;
    }

    public static List<RSToDo> map(List<ToDo> todos)
    {
        return todos.ConvertAll<RSToDo>(map);
    }

    public static ToDo map(RQToDo body)
    {
        var todo = new ToDo();
        todo.Title = body.Title;
        todo.Description = body.Description;
        return todo;
    }
}