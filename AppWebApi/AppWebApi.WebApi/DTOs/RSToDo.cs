namespace AppWebApi.WebApi.DTOs;

public class RSToDo 
{
    public string? Id { get; set; }
    public string? Title { get; set; }
    public string Description { get; set; } = string.Empty;
    public bool IsDone { get; set; } = false;

    public RSToDo(): this(string.Empty, string.Empty, string.Empty, false){ }
    public RSToDo(string id, string? title, string description, bool isDone)
    {
        Id = id;
        Title = title;
        Description = description;
        IsDone = isDone;
    }

}