import { Component, Injectable } from '@angular/core';

let loggerServiceCounter = 0;

@Injectable()
export class LoggerService {
  public instanceId = 0;
  constructor() {
    console.log('creating a new logger service instance');
    this.instanceId = loggerServiceCounter++;
  }
  log(msg) {
    console.log('instance id', this.instanceId, ', msg: ', msg);
  }
}

@Injectable()
export class AltLoggerService {
  public instanceId = 0;
  constructor() {
    console.log('creating a new alt logger service instance');
    this.instanceId = loggerServiceCounter++;
  }
  log(msg) {
    console.log('alt instance id', this.instanceId, ', msg: ', msg);
  }
}

@Component({
  selector: 'left-child',
  template: 'Left Child',
  providers: [ { provide: LoggerService, useClass: AltLoggerService } ],
})
export class LeftChildComponent {

  constructor(private logger: LoggerService) { }

  public ngOnInit() {
    this.logger.log('left-child');
  }
}

@Component({
  selector: 'right-child',
  template: 'right Child',
})
export class RightChildComponent {

  constructor(private logger: LoggerService) { }

  public ngOnInit() {
    this.logger.log('right-child');
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ { provide: LoggerService, useClass: LoggerService } ],
})
export class AppComponent {

  constructor(private logger: LoggerService) { }

  public ngOnInit() {
    this.logger.log('app component');
  }
}
