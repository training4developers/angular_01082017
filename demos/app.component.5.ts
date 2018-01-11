import { Component, Optional } from '@angular/core';

class ColorsService {
  all() { return [ 'hot pink' ]; }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [  ],
})
export class AppComponent {

  constructor(@Optional() private colorsSvc: ColorsService) {

    if (colorsSvc) {
      console.log(colorsSvc.all());
    }

  }

}
