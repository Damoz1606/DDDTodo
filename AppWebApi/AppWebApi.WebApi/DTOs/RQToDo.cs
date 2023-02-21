namespace AppWebApi.WebApi.DTOs;

public class RQToDo
{
    public string? Title { get; set; }
    public string Description { get; set; } = string.Empty;

    public RQToDo(): this(null, string.Empty) { }

    public RQToDo(string? title, string description)
    {
        Title = title;
        Description = description;
    }

}