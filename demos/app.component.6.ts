import { Component, InjectionToken, Inject } from '@angular/core';

const DataServiceToken = new InjectionToken<DataService>('data service');

interface DataService {
  all();
}

class ColorsService implements DataService {
  all() { return [ 'hot pink' ]; }
}

class CarsService implements DataService {
  all() { return [ 'ford' ]; }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ { provide: DataServiceToken, useClass: CarsService } ],
})
export class AppComponent {

  constructor(@Inject(DataServiceToken) private dataSvc: DataService) {

    if (dataSvc) {
      console.log(dataSvc.all());
    }

  }

}
