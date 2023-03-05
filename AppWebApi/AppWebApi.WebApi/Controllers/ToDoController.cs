using AppWebApi.WebApi.DTOs;
using AppWebApi.WebApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace AppWebApi.WebApi.Controllers;

[ApiController]
[Route("api/todos")]
public class ToDoController: ControllerBase
{
    private readonly ToDoService _service;

    public ToDoController(ToDoService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<ActionResult<List<RSToDo>>> FindAll()
    {
        try
        {
            var todos = await this._service.FindAll();
            return StatusCode(StatusCodes.Status200OK, todos);
        }
        catch (Exception e)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, default(List<RSToDo>));
        }
    }

    [HttpGet, Route("single/{id}")]
    public async Task<ActionResult<RSToDo>> Find(string id)
    {
        try
        {
            var todo = await this._service.Find(id);
            return StatusCode(StatusCodes.Status200OK, todo);
        }
        catch (Exception e)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, default(RSToDo));
        }
    }

    [HttpPost]
    public async Task<ActionResult<String>> Create(RQToDo body)
    {
        try
        {
            await this._service.Create(body);
            var todos = await this._service.FindAll();
            String? id = todos[todos.Count - 1].Id;
            return StatusCode(StatusCodes.Status201Created, id);
        }
        catch (Exception e)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, default(RSToDo));
        }
    }

    [HttpPut, Route("{id}")]
    public async Task<ActionResult> Update(string id, RQToDo body)
    {
        try
        {
            await this._service.Update(id, body);
            return StatusCode(StatusCodes.Status200OK);
        }
        catch (Exception e)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpPut, Route("status/{id}")]
    public async Task<ActionResult> UpdateStatus(string id, RQTodoStatus body)
    {
        try
        {
            await this._service.UpdateStatus(id, body);
            return StatusCode(StatusCodes.Status200OK);
         
        }
        catch (Exception e)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpDelete, Route("{id}")]
    public async Task<ActionResult> Delete(string id)
    {
        try
        {
            await this._service.Delete(id);
            return StatusCode(StatusCodes.Status200OK);
        }
        catch (Exception e)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
}