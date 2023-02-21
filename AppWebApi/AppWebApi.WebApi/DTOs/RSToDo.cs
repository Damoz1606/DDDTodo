namespace AppWebApi.WebApi.DTOs;

public class RSToDo 
{
    public string? Id { get; set; }
    public string? Title { get; set; }
    public string Description { get; set; } = string.Empty;

    public RSToDo(): this(string.Empty, string.Empty, string.Empty){ }
    public RSToDo(string id, string? title, string description)
    {
        Id = id;
        Title = title;
        Description = description;
    }

}