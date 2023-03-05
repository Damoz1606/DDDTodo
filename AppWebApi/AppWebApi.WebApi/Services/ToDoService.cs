using AppWebApi.Domain.Interfaces;
using AppWebApi.WebApi.DTOs;
using AppWebApi.WebApi.Mapper;

namespace AppWebApi.WebApi.Services;

public class ToDoService
{
    private readonly IToDoRepository _repository;

    public ToDoService(IToDoRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<RSToDo>> FindAll()
    {
        var todos = await this._repository.FindAll();
        return ToDoMapper.map(todos);
    }

    public async Task<RSToDo> Find(string id)
    {
        var todo = await this._repository.Find(id);
        return ToDoMapper.map(todo);
    }

    public async Task Create(RQToDo body)
    {
        var todo = ToDoMapper.map(body);
        await this._repository.Create(todo);
    }

    public async Task Update(string id, RQToDo body)
    {
        var todo = ToDoMapper.map(body);
        todo.Id = id;
        await this._repository.Update(id, todo);
    }

    public async Task UpdateStatus(string id, RQTodoStatus body)
    {
        var todo = await this._repository.Find(id);
        if(todo != null)
        {
            todo.IsDone = body.IsDone;
            await this._repository.Update(id, todo);
        }
    }

    public async Task Delete(string id)
    {
        await this._repository.Delete(id);
    }
}