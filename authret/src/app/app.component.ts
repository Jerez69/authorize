import { Component } from '@angular/core';
import { WebService } from './web.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'authret';
  err: HttpErrorResponse = new HttpErrorResponse({ status: 200 });

  constructor(private webService: WebService) { 
    console.log('AppComponent.constructor...');
  }

  public ping1() {
    console.log('AppComponent.ping1...');

    this.webService.ping1()
      .subscribe({
        next: (res) => {
          console.log('AppComponent.ping1 returned: ' + res);
        },
        error: (e) => {
          console.log('AppComponent.ping1: Error ! --> ' + e.status);
          console.error(e);
          this.err = e;
        },
        complete: () => console.info('AppComponent.ping1: complete')
      });

    console.log('AppComponent.ping done');
  }

  public ping2() {
    console.log('AppComponent.ping2...');

    this.webService.ping2()
      .subscribe({
        next: (res) => {
          console.log('AppComponent.ping2 returned: ' + res);
        },
        error: (e) => {
          console.log('AppComponent.ping2: Error ! --> ' + e.status);
          console.error(e);
          this.err = e;
        },
        complete: () => console.info('AppComponent.ping2: complete')
      });

    console.log('AppComponent.ping2 done');
  }

  public ping3() {
    console.log('AppComponent.ping3...');

    this.webService.ping3()
      .subscribe({
        next: (res) => {
          console.log('AppComponent.ping3 returned: ' + res);
        },
        error: (e) => {
          console.log('AppComponent.ping3: Error ! --> ' + e.status);
          console.error(e);
          this.err = e;
        },
        complete: () => console.info('AppComponent.ping3: complete')
      });

    console.log('AppComponent.ping3 done');
  }

  public ping4() {
    console.log('AppComponent.ping4...');

    this.webService.ping4()
      .subscribe({
        next: (res) => {
          console.log('AppComponent.ping4 returned: ' + res);
        },
        error: (e) => {
          console.log('AppComponent.ping4: Error.Status: ' + e.status);
          console.error(e);
          this.err = e;
        },
        complete: () => console.info('AppComponent.ping4: complete')
      });

    console.log('AppComponent.ping4 done');
  }

  public wrapping4() {
    console.log('AppComponent.wrapping4...');

    this.webService.wrapping4()
      .subscribe({
        next: (res) => {
          console.log('AppComponent.wrapping4 returned: ' + res);
        },
        error: (e) => {
          console.log('AppComponent.wrapping4: Error.Status: ' + e.status);
          console.error(e);
          this.err = e;
        },
        complete: () => console.info('AppComponent.wrapping4: complete')
      });

    console.log('AppComponent.wrapping4 done');
  }

  public ping5() {
    console.log('AppComponent.ping5...');

    this.webService.ping5()
      .subscribe({
        next: (res) => {
          console.log('AppComponent.ping5 returned: ' + res);
        },
        error: (e) => {
          console.log('AppComponent.ping5: Error.Status: ' + e.status);
          console.error(e);
          this.err = e;
        },
        complete: () => console.info('AppComponent.ping5: complete')
      });

    console.log('AppComponent.ping5 done');
  }

  public ping6() {
    console.log('AppComponent.ping6...');

    this.webService.ping6()
      .subscribe({
        next: (res) => {
          console.log('AppComponent.ping6 returned: ' + res);
        },
        error: (e) => {
          console.log('AppComponent.ping6: Error.Status: ' + e.status);
          console.error(e);
          this.err = e;
        },
        complete: () => console.info('AppComponent.ping6: complete')
      });

    console.log('AppComponent.ping6 done');
  }

  public login() {
    console.log('AppComponent.login...');

    this.webService.login()
      .subscribe({
        next: (res) => {
          //console.log('AppComponent.login returned: ' + res.tokenType);
          //console.log('AppComponent.login returned: ' + res.expiresIn);
          //console.log('AppComponent.login returned: ' + res.refreshToken);
          //console.log('AppComponent.login returned: ' + res.accessToken);
          console.log('AppComponent.login returned: ' + res);
        },
        error: (e) => {
          console.log('AppComponent.login: Error.Status: ' + e.status);
          console.error(e);
          this.err = e;
        },
        complete: () => console.info('AppComponent.login: complete')
      });

    console.log('AppComponent.login done');
  }

  public register() {
    console.log('AppComponent.register...');

    this.webService.register()
      .subscribe({
        next: (res) => {
          console.log('AppComponent.register returned: ' + res);
        },
        error: (e) => {
          console.log('AppComponent.register: Error.Status: ' + e.status);
          console.error(e);
          this.err = e;
        },
        complete: () => console.info('AppComponent.register: complete')
      });

    console.log('AppComponent.register done');
  }

}
