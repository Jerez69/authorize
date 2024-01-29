using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Cosmos;
using Microsoft.EntityFrameworkCore;
using System;
using WebApp4.Models;
using WebApp4.Services;

var builder = WebApplication.CreateBuilder(args);

var MyAllowSpecificOrigins = "MyCorsPolicy";

builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins,
        builder => builder
            //.WithOrigins("http://localhost:5216", "https://localhost:4200/", "http://localhost:4200/", "https://localhost:7267/", "https://localhost:7267/api/WeatherForecast/ping1")
            //.AllowAnyOrigin()
            .SetIsOriginAllowed(origin => true) // allow any origin
            .AllowAnyHeader()
            .AllowCredentials()
            .AllowAnyMethod());
});

builder.Services.AddAuthentication(IdentityConstants.ApplicationScheme)
    .AddIdentityCookies()
    .ApplicationCookie!.Configure(opt => opt.Events = new CookieAuthenticationEvents()
    {
        OnRedirectToLogin = ctx =>
        {
            ctx.Response.StatusCode = 401;
            return Task.CompletedTask;
        }
    });

builder.Services.AddAuthorizationBuilder();

// Add services to the container.
builder.Services.AddDbContext<ApplicationDBContext>(
//    options => options.UseCosmos(
//        builder.Configuration.GetSection("CosmosDb").GetValue<string>("Account"),
//        builder.Configuration.GetSection("CosmosDb").GetValue<string>("Key"),
//        builder.Configuration.GetSection("CosmosDb").GetValue<string>("DatabaseName")));
    options => options.UseInMemoryDatabase("AppDb"));

builder.Services.AddIdentityCore<MyUser>()
  .AddEntityFrameworkStores<ApplicationDBContext>()
  .AddApiEndpoints();

/*
builder.Services.Configure<IdentityOptions>(options =>
{
    options.SignIn.RequireConfirmedEmail = true;
});
builder.Services.AddTransient<IEmailSender, EmailSender>();
*/

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.MapIdentityApi<MyUser>();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseCors(MyAllowSpecificOrigins);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCookiePolicy(
    new CookiePolicyOptions
    {
        MinimumSameSitePolicy = SameSiteMode.None
    });

app.UseAuthentication();

app.UseAuthorization();

// protection from cross-site request forgery (CSRF/XSRF) attacks with empty body
// form can't post anything useful so the body is null, the JSON call can pass
// an empty object {} but doesn't allow cross-site due to CORS.
app.MapPost("/logout", async (
    SignInManager<MyUser> signInManager,
    [FromBody] object empty) =>
{
    if (empty is not null)
    {
        await signInManager.SignOutAsync();
        return Results.Ok();
    }
    return Results.NotFound();
}).RequireAuthorization();

app.MapControllers();

app.Run();