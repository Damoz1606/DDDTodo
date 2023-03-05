namespace AppWebApi.WebApi.DTOs;

public class RQTodoStatus
{
    public bool IsDone { get; set; } = false;

    public RQTodoStatus() : this(false) { }

    public RQTodoStatus(bool isDone)
    {
        IsDone = isDone;
    }
}