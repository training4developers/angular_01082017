import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class ContactTypesResolve implements Resolve<string[]> {

  constructor() {

  }

  resolve() {

    return [ 'phone', 'email', 'smoke signals', 'carrier pigeon' ];

  }

}

