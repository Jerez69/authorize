# authorize

Following are my errors which I don#t come around and need help:

1. CORS Error:

```
builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins,
        builder => builder
            .WithOrigins("http://localhost:5216", "https://localhost:4200/", "http://localhost:4200/", "https://localhost:7267/", "https://localhost:7267/api/WeatherForecast/ping1")
            //.AllowAnyOrigin()
            .SetIsOriginAllowed(origin => true) // allow any origin
            .AllowAnyHeader()
            .AllowCredentials()
            .AllowAnyMethod());
});
```

As soon as I activate .AllowCredentials(), I'm not allowed to use any more .AllowAnyOrigin().
At the moment I found a worakaround by using

```
.SetIsOriginAllowed(origin => true)
```

Only with .AllowAnyOrigin() I'm able to call without methods [Authorize] currently.
When I try the commnered out line
```
.WithOrigins("http://localhost:5216", "https://localhost:4200/", "http://localhost:4200/", "https://localhost:7267/", "https://localhost:7267/api/WeatherForecast/ping1")
```
I get following error:
```
Access to XMLHttpRequest at 'https://localhost:7267/api/weatherforecast/ping1' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```
The method 'ping1' is not protected with [Authorize].

That means, if I just try to work with 
```
.WithOrigins("http://localhost:5216", "https://localhost:4200/", "http://localhost:4200/", "https://localhost:7267/", "https://localhost:7267/api/WeatherForecast/ping1")
```
I get at all methids a CORS error message.

Question: How can I activate CORS in the right way?

---

2. Login

Via SwaggerUI I'm able to processs following workflow:
- [Authorize] Methode returns 401
- Register and Login
  (also with email confirmation sucessful, but in the example I have omitted the email confirmation)
- [Authorize] methode called sucessfully.

The same now with my example angular app:

Register has worked the account is successfully stored in my CosmosDB,
here in the example is only the InMemoryDB configured
and have provided a fix account and password
to avoid providing permanent input.

Login returns 2 entrioes in the Network Tab:
- 204
- 200
That seems form the begininng not so bad to me.
Though die question: Why 204 and 200?

But now the call to the protected method:
Although loging seems to work I can't call a protected methid from my angular app.

```
Request URL:
https://localhost:7267/api/weatherforecast/ping3
Request Method:
GET
Status Code:
401 Unauthorized
Referrer Policy:
strict-origin-when-cross-origin
```

Again also here a 410.

Questions:
Do I have to do something more at the login?
To set a Cookie explicitly or the Expirydate? And if yes how?
Should the Login methode return more?
I just get 200, but nothing alse. Is that ok? 
--> How is it possible to call the protected methods (like in the SwaggerUI)?

Please have look to my Program.cs
Is there something wrong or do I have to to do something inmy angular app?
