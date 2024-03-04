import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { LoginRequest } from './LoginRequest';
import { HttpValidationProblemDetails } from './HttpValidationProblemDetails';
import { AccessTokenResponse } from './AccessTokenResponse';

const baseUrl = 'https://localhost:7267/';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private _http: HttpClient) { }

  public ping1(): Observable<boolean> {
    return this._http.get<boolean>(baseUrl + 'api/weatherforecast/ping1')
      .pipe(
        tap(_ => console.log('ping1')),
        catchError(error => {
          console.log('UserService.ping1: Error!, ' + error.status);
          console.log('UserService.ping1: Error detected: Error' + error.error);
          console.log('UserService.ping1: Error detected: Message ' + error.message);
          console.log('UserService.ping1: Error detected: Status ' + error.status);
          console.log('UserService.ping1: Error detected: Url ' + error.url);
          console.log('UserService.ping1: Error detected: StatusText ' + error.statusText);
          console.log('UserService.ping1: Error detected: Name ' + error.name);
          console.log('UserService.ping1: Error detected: Type ' + error.type);
          console.log('UserService.ping1: Error detected: Headers ' + error.headers);
          console.log('UserService.ping1: Error detected: Ok ' + error.ok);
          console.log('-----------------');
          console.error(error);
          console.log('-----------------');
          return throwError(() => error);
        })
      );
  }

  public ping2(): Observable<boolean> {
    return this._http.get<boolean>(baseUrl + 'api/weatherforecast/ping2')
      .pipe(
        tap(_ => console.log('ping2')),
        catchError(error => {
          console.log('UserService.ping2: Error!, ' + error.status);
          console.log('UserService.ping2: Error detected: Error' + error.error);
          console.log('UserService.ping2: Error detected: Message ' + error.message);
          console.log('UserService.ping2: Error detected: Status ' + error.status);
          console.log('UserService.ping2: Error detected: Url ' + error.url);
          console.log('UserService.ping2: Error detected: StatusText ' + error.statusText);
          console.log('UserService.ping2: Error detected: Name ' + error.name);
          console.log('UserService.ping2: Error detected: Type ' + error.type);
          console.log('UserService.ping2: Error detected: Headers ' + error.headers);
          console.log('UserService.ping2: Error detected: Ok ' + error.ok);
          console.log('-----------------');
          console.error(error);
          console.log('-----------------');
          return throwError(() => error);
        })
      );
  }

  public ping3(): Observable<boolean> {
    return this._http.get<boolean>(baseUrl + 'api/weatherforecast/ping3', { withCredentials: true })
      .pipe(
        tap(_ => console.log('ping3')),
        catchError(error => {
          console.log('UserService.ping3: Error!, ' + error.status);
          console.log('UserService.ping3: Error detected: Error' + error.error);
          console.log('UserService.ping3: Error detected: Message ' + error.message);
          console.log('UserService.ping3: Error detected: Status ' + error.status);
          console.log('UserService.ping3: Error detected: Url ' + error.url);
          console.log('UserService.ping3: Error detected: StatusText ' + error.statusText);
          console.log('UserService.ping3: Error detected: Name ' + error.name);
          console.log('UserService.ping3: Error detected: Type ' + error.type);
          console.log('UserService.ping3: Error detected: Headers ' + error.headers);
          console.log('UserService.ping3: Error detected: Ok ' + error.ok);
          console.log('-----------------');
          console.error(error);
          console.log('-----------------');
          return throwError(() => error);
        })
      );
  }

  public ping4(): Observable<boolean> {
    return this._http.get<boolean>(baseUrl + 'api/weatherforecast/ping4')
      .pipe(
        tap(_ => console.log('ping4')),
        catchError(error => {
          console.log('-----------------');
          console.error(error);
          console.log('-----------------');
          console.log('UserService.ping4: Error.Status: ' + error.status);
          console.log('UserService.ping4: Error.Message: ' + error.message);
          console.log('UserService.ping4: Error.Status: ' + error.status);
          console.log('UserService.ping4: Error.Url: ' + error.url);
          console.log('UserService.ping4: Error.StatusText: ' + error.statusText);
          console.log('UserService.ping4: Error.Name: ' + error.name);
          console.log('UserService.ping4: Error.Type: ' + error.type);
          console.log('UserService.ping4: Error.Ok: ' + error.ok);
          console.log('-----------------');
          return throwError(() => error);
        })
      );
  }

  public wrapping4(): Observable<boolean> {
    return this._http.get<boolean>(baseUrl + 'api/weatherforecast/wrapping4')
      .pipe(
        tap(_ => console.log('wrapping4')),
        catchError(error => {
          console.log('-----------------');
          console.error(error);
          console.log('-----------------');
          console.log('UserService.wrapping4: Error.Status: ' + error.status);
          console.log('UserService.wrapping4: Error.Message: ' + error.message);
          console.log('UserService.wrapping4: Error.Status: ' + error.status);
          console.log('UserService.wrapping4: Error.Url: ' + error.url);
          console.log('UserService.wrapping4: Error.StatusText: ' + error.statusText);
          console.log('UserService.wrapping4: Error.Name: ' + error.name);
          console.log('UserService.wrapping4: Error.Type: ' + error.type);
          console.log('UserService.wrapping4: Error.Ok: ' + error.ok);
          console.log('-----------------');
          return throwError(() => error);
        })
      );
  }

  public ping5(): Observable<boolean> {
    return this._http.get<boolean>(baseUrl + 'api/weatherforecast/ping5')
      .pipe(
        tap(_ => console.log('ping5')),
        catchError(error => {
          console.log('-----------------');
          console.error(error);
          console.log('-----------------');
          console.log('UserService.ping5: Error.Status: ' + error.status);
          console.log('UserService.ping5: Error.Message: ' + error.message);
          console.log('UserService.ping5: Error.Status: ' + error.status);
          console.log('UserService.ping5: Error.Url: ' + error.url);
          console.log('UserService.ping5: Error.StatusText: ' + error.statusText);
          console.log('UserService.ping5: Error.Name: ' + error.name);
          console.log('UserService.ping5: Error.Type: ' + error.type);
          console.log('UserService.ping5: Error.Ok: ' + error.ok);
          console.log('-----------------');
          return throwError(() => error);
        })
      );
  }

  public ping6(): Observable<boolean> {
    return this._http.get<boolean>(baseUrl + 'api/weatherforecast/ping6')
      .pipe(
        tap(_ => console.log('ping6')),
        catchError(error => {
          console.log('-----------------');
          console.error(error);
          console.log('-----------------');
          console.log('UserService.ping6: Error.Status: ' + error.status);
          console.log('UserService.ping6: Error.Message: ' + error.message);
          console.log('UserService.ping6: Error.Status: ' + error.status);
          console.log('UserService.ping6: Error.Url: ' + error.url);
          console.log('UserService.ping6: Error.StatusText: ' + error.statusText);
          console.log('UserService.ping6: Error.Name: ' + error.name);
          console.log('UserService.ping6: Error.Type: ' + error.type);
          console.log('UserService.ping6: Error.Ok: ' + error.ok);
          console.log('-----------------');
          return throwError(() => error);
        })
      );
  }

  public setCookie(): Observable<boolean> {
    return this._http.post<boolean>(baseUrl + 'set-cookie', {}, { withCredentials: true})
      .pipe(
        tap(_ => console.log('setCookie')),
        catchError(error => {
          console.log('-----------------');
          console.error(error);
          console.log('-----------------');
          console.log('UserService.setCookie: Error.Status: ' + error.status);
          console.log('UserService.setCookie: Error.Message: ' + error.message);
          console.log('UserService.setCookie: Error.Status: ' + error.status);
          console.log('UserService.setCookie: Error.Url: ' + error.url);
          console.log('UserService.setCookie: Error.StatusText: ' + error.statusText);
          console.log('UserService.setCookie: Error.Name: ' + error.name);
          console.log('UserService.setCookie: Error.Type: ' + error.type);
          console.log('UserService.setCookie: Error.Ok: ' + error.ok);
          console.log('-----------------');
          return throwError(() => error);
        })
      );
  }

  public login (): Observable<AccessTokenResponse> {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    });    
    let options = {
      headers: httpHeaders,
      withCredentials: true
    };
    var loginRequest = new LoginRequest();
    loginRequest.email = "marcus.wuebbe@gmx.de";
    loginRequest.password = "Geheim$24";
    
    return this._http.post<AccessTokenResponse>(baseUrl + 'login?useCookies=true&useSessionCookies=true', loginRequest, options)
      .pipe(
        tap(res => console.log('webService.login returned ' + res)),
        catchError(error => {
          console.log('webService.login: Error!, ' + error.status);
          console.error(error);
          return throwError(() => error);
        })
      );
  }

  public register (): Observable<boolean> {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    });    
    let options = {
      headers: httpHeaders
    };
    var loginRequest = new LoginRequest();
    loginRequest.email = "marcus.wuebbe@gmx.de";
    loginRequest.password = "Geheim$24";
    
    return this._http.post<boolean>(baseUrl + 'register', loginRequest, options)
      .pipe(
        tap(res => console.log('webService.register returned ' + res)),
        catchError(error => {
          console.log('webService.register: Error!, ' + error.status);
          console.error(error);
          console.log('-----------------');
          console.log('webService.register: Error.Status: ' + error.status);
          console.log('webService.register: Error.Message: ' + error.message);
          console.log('webService.register: Error.Status: ' + error.status);
          console.log('webService.register: Error.Url: ' + error.url);
          console.log('webService.register: Error.StatusText: ' + error.statusText);
          console.log('webService.register: Error.Name: ' + error.name);
          console.log('webService.register: Error.Type: ' + error.type);
          console.log('webService.register: Error.Ok: ' + error.ok);
          console.log('webService.register: Error.Instance: ' + error.Instance);
          console.log('-----------------');
          var err = new HttpErrorResponse(error);
          console.log('webService.register: Error.Error: ' + err.error.title);
          console.log('-----------------');
          //let obj:HttpValidationProblemDetails = JSON.parse(error.error);
          //console.log('webService.register: Error.Error: ' + obj.title);
          console.log('-----------------');
          return throwError(() => error);
        })
      );
  }
}
