import { Component, Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  log(msg) {
    console.log(msg);
  }

}

@Injectable()
export class AltLoggerService {

  log(msg) {
    console.log('alt > ' + msg);
  }

}

const coolLogger = {
  log(msg) { console.log('cool => ' + msg); }
};

const loggerServiceFactory = () => {
  return new LoggerService();
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // angular.service
  // providers: [ { provide: LoggerService, useClass: AltLoggerService } ],
  // angular.value
  // providers: [ { provide: LoggerService, useValue: coolLogger } ],
  // angular.factory
  providers: [ { provide: LoggerService, useFactory: loggerServiceFactory } ],
})
export class AppComponent {

  constructor(private logger: LoggerService) { }

  public ngOnInit() {
    this.logger.log('you all rock!');
  }
}
