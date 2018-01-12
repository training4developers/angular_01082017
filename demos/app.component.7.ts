import { Component, InjectionToken, Inject, Injectable } from '@angular/core';
import {
  HttpClient, HttpInterceptor,
  HttpRequest, HttpHandler, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { WebSocketDemoService } from './services/web-socket-demo.service';

interface Color {
  id: number;
  name: string;
  hexCode: string;
}

@Injectable()
export class AuthorizationTokenInterceptor implements HttpInterceptor {

  public intercept(request: HttpRequest<any>, next: HttpHandler) {

    request = request.clone({
      setHeaders: {
        Authorization: 'some token',
      }
    });

    return next.handle(request);

  }

}

const DataServiceToken = new InjectionToken<DataService>('data service');

interface DataService {
  all();
}

@Injectable()
class ColorsService implements DataService {

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get<Color[]>('http://localhost:3010/colors').toPromise();
   }
}

const colorsServiceFactory = (httpClient: HttpClient) => {

  return new ColorsService(httpClient);

};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    // { provide: DataServiceToken, useFactory: colorsServiceFactory, deps: [ HttpClient ] }
    ColorsService,
  ],
})
export class AppComponent {

  public coolNums: Observable<number>;

  // constructor(@Inject(DataServiceToken) private dataSvc: DataService) {
  constructor(private dataSvc: ColorsService, private webSocketDemo: WebSocketDemoService) {

    this.coolNums = webSocketDemo.all();

    if (dataSvc) {
      dataSvc.all().then( (colors: Color[]) => console.log(colors));
    }

  }

}
