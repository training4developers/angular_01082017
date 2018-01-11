import { Component } from '@angular/core';

class ColorsService {
  all() { return [ 'hot pink' ]; }
}

class NewColorsService {

  constructor() {
    console.log('created a new color service instance');
  }

  all() { return [ 'my little pony' ]; }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ NewColorsService, { provide: ColorsService, useExisting: NewColorsService } ],
})
export class AppComponent {

  constructor(
    private newColors: NewColorsService,
    private colors: ColorsService
  ) {
    console.log(this.newColors.all());
    console.log(this.colors.all());
  }

}
