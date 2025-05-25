using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore.PostgreSQL;
using WebApiBackend.Context;
using WebApiBackend.Models.Entities;
using WebApiBackend.Services.RoadMapService;
using WebApiBackend.Services.UserService;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<IRoadMap, RoadMapService>();
builder.Services.AddScoped<IUser, UserService>();


// Adicionando credencias do MySQL:
string conexaoDb = builder.Configuration.GetConnectionString("ConexaoPostGres");

// Conectando com Banco de Dados mySQL:
builder.Services.AddDbContextPool<RoadMapContext>(options =>
        options.UseNpgsql(conexaoDb));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
