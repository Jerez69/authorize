# authorize

1. CORS Fehler:

```
builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins,
        builder => builder
            .WithOrigins("http://localhost:5216", "https://localhost:4200/", "http://localhost:4200/", "https://localhost:7267/", "https://localhost:7267/api/WeatherForecast/ping1")
            //.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowCredentials()
            .AllowAnyMethod());
});
```

Sobald .AllowCredentials() aktiviere, darf nicht mehr .AllowAnyOrigin() verwendet werden.

Nur mit .AllowAnyOrigin() kann ich im Moment ohne [Authorize] markierte Methoden erfolgreich aufrufen.
Ansonsten kommt sowieso eien CORS Error message:
Access to XMLHttpRequest at 'https://localhost:7267/api/weatherforecast/ping1' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
Die Methode 'ping1' ist dabei nicht geschützt.

Frage: Wie aktiviere ich CORS richtig?

2. CORS Fehler bei Aufruf von [Authorize] Methoden:

Ich will ja gar nicht .AllowAnyOrigin() aktivieren, aber jetzt tu ich's mal:

```
builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins,
        builder => builder
            //.WithOrigins("http://localhost:5216", "https://localhost:4200/", "http://localhost:4200/", "https://localhost:7267/", "https://localhost:7267/api/WeatherForecast/ping1")
            .AllowAnyOrigin()
            .AllowAnyHeader()
            //.AllowCredentials()
            .AllowAnyMethod());
});
```

Jetzt kann ich ohne [Authorize] markierte Methoden erfolgreich aufrufen.
Auszug aus der Nework-Tab von Chrome:

Request URL:
https://localhost:7267/api/weatherforecast/ping1
Request Method:
GET
Status Code:
200 OK
Remote Address:
[::1]:7267
Referrer Policy:
strict-origin-when-cross-origin

Rufe ich eine geschützte Methode auf, kommt aber wieder der CORS Fehler:

Auszug aus der Nework-Tab von Chrome:

Request URL:
https://localhost:7267/api/weatherforecast/ping3
Request Method:
GET
Status Code:
401 Unauthorized
Referrer Policy:
strict-origin-when-cross-origin

Das ist ja gar nict so schlecht, die 401 ist erkannt.
Aber ich bekomme die 401 nicht in die Angular app:

```
Access to XMLHttpRequest at 'https://localhost:7267/api/weatherforecast/ping3' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

UserService.ping3: Error detected: Message Http failure response for https://localhost:7267/api/weatherforecast/ping3: 0 Unknown Error
web.service.ts:72 UserService.ping3: Error detected: Status 0
web.service.ts:73 UserService.ping3: Error detected: Url https://localhost:7267/api/weatherforecast/ping3
web.service.ts:74 UserService.ping3: Error detected: StatusText Unknown Error
web.service.ts:75 UserService.ping3: Error detected: Name HttpErrorResponse
web.service.ts:76 UserService.ping3: Error detected: Type undefined
web.service.ts:77 UserService.ping3: Error detected: Headers [object Object]
web.service.ts:78 UserService.ping3: Error detected: Ok false
```

Nur noch Status 0 statt der 401!
Die 401 habe ich hier nicht mehr wegen des CORS Fehler, denke ich.

Frage: Wie bekomme ich den 401 Fehler korrekt in die Angular App?

3. Login

Über SwaggerUI kann ich folgendes erfolgreich abfahren:
- [Authorize] Methode liefert 401
- Register und Login, dabei sogar auch die email confirmation erfolgreich
- [Authorize] Methode klappt.

Das gleiche aber über meine Bespiel-Angular App:

(Register hat geklappt, der Account ist erfolgreich in meiner CosmosDB gespeichert)

Login liefert zwei Einträge in der Network Tab:
- 204
- 200
Schaut also gar nicht so schlecht aus.
Trotzdem Frage: Warum 204 und 200?

Nun die geschützte Methode:

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

Und auch hier wieder die CORS Meesage:

```
Access to XMLHttpRequest at 'https://localhost:7267/api/weatherforecast/ping3' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

Frage: 
- Wie bekomme es hin, dass die geschützten Methoden aufrufbar werden (wie im SwaggerUI)?






