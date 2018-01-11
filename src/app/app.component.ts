import { Component, InjectionToken, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Color {
  id: number;
  name: string;
  hexCode: string;
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

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ { provide: DataServiceToken, useFactory: colorsServiceFactory, deps: [ HttpClient ] } ],
})
export class AppComponent {

  constructor(@Inject(DataServiceToken) private dataSvc: DataService) {

    if (dataSvc) {
      dataSvc.all().then( (colors: Color[]) => console.log(colors));
    }

  }

}
