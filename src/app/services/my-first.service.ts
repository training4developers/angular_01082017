import { Injectable } from '@angular/core';

import { MySecondService } from '../services/my-second.service';

@Injectable()
export class MyFirstService {
  constructor(private mySecondService: MySecondService) { }
  doIt() {
    console.log('do it');
    this.mySecondService.doSomething();
  }
}
