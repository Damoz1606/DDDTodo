using AppWebApi.Core.Agnostic.Mongo;
using AppWebApi.Domain.Interfaces;
using AppWebApi.Infrastructure.Data;
using AppWebApi.Infrastructure.Data.Repository;
using AppWebApi.WebApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services
    .AddScoped(typeof(IMongoContext<,>), typeof(MongoContext<,>))
    .AddScoped<IMongoConnection, MongoConnection>()
    .AddScoped(typeof(IRepository<,>), typeof(RepositoryBase<,>))
    .AddScoped<IToDoRepository, ToDoRepository>()
    .AddScoped<ToDoService>();

MongoDomainMapRegistrator.RegisterDocumentMaps();

builder.Services.AddCors(options =>
{
    options.AddPolicy("Cors", policy =>
    {
        policy
        .AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
builder.Configuration.AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", optional: true);
Console.WriteLine($"appsettings.{builder.Environment.EnvironmentName}.json");
builder.Configuration.AddEnvironmentVariables();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("Cors");

app.UseAuthorization();

app.MapControllers();

app.Run();
