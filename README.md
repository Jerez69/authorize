# authorize

1. CORS Fehler:

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

Sobald .AllowCredentials() aktiviere, darf nicht mehr .AllowAnyOrigin() verwendet werden.
Das umgehe ich gerade, indem ich die Zeile

```
.SetIsOriginAllowed(origin => true)
```

gefunden habe.

Nur mit .AllowAnyOrigin() kann ich im Moment ohne [Authorize] markierte Methoden erfolgreich aufrufen.
Ansonsten kommt sowieso eien CORS Error message:
Access to XMLHttpRequest at 'https://localhost:7267/api/weatherforecast/ping1' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
Die Methode 'ping1' ist dabei nicht geschützt.

Sprich, wenn ich versuche, nur mit 
```
.WithOrigins("http://localhost:5216", "https://localhost:4200/", "http://localhost:4200/", "https://localhost:7267/", "https://localhost:7267/api/WeatherForecast/ping1")
```
zu arbeiten, bekomme ich bei allen Methoden eien CORS Fehler-Meldung.

Frage: Wie aktiviere ich CORS richtig?

---

2. Login

Über SwaggerUI kann ich folgendes erfolgreich abfahren:
- [Authorize] Methode liefert 401
- Register und Login
  (dabei sogar auch die email confirmation erfolgreich, idem Beispiel habe ich dei email confirmation abgeklemmt)
- [Authorize] Methode klappt.

Das gleiche aber über meine Bespiel-Angular App:

Register hat geklappt, der Account ist erfolgreich in meiner CosmosDB gespeichert,
hier im Beispiel ist nur die InMmemoryDB konfiguriert
und ich habe einen fixen account und fixes passwort eingestellt,
um mir im beispiel das ständige Eingeben zu ersparen.

Login liefert zwei Einträge in der Network Tab:
- 204
- 200
Schaut also gar nicht so schlecht aus.
Trotzdem die Frage: Warum 204 und 200?

Nun die geschützte Methode:
Obwohl login scheinbar geklappt hat, kann ich trotzdem keine geschützten Methoden aufrufen:

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

Also auch hier wieder die 401 error message, obwohl login scheinbar geklappt hat.
Leider kann ich in die Login Methode nicht reindebuggen,
da habe ich den Sourcecode nicht, zumindest hab ich ihn nicht gefunden.

Fragen:
Muss ich beim Login noch irgendwas extra tun?
Ein Cookie explizit setzen oder dessen Expirydate? Und wenn ja, wie?
Was sollte denn eigentlich bei der Login Methode zurückkommen?
Ich bekomme zwar die 200, aber sonst nichts. Ist das ok? 
--> Wie bekomme es hin, dass die geschützten Methoden aufrufbar werden (wie im SwaggerUI)?

Schau dir doch bitte mal das Program.cs der WebApp an,
fällt Dir irgendwas auf, was nicht passt?
Und/oder muss ich in der angular app noch irgendwas zusätzlich tun?






