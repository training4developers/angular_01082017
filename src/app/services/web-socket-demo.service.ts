import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class WebSocketDemoService {

  all() {

    return Observable.create( (observer: Observer<number>) => {

      const ws = new WebSocket('ws://localhost:3030');

      ws.addEventListener('message', (msg) => {
        observer.next(Number(msg.data));
      });

    });

  }

}
