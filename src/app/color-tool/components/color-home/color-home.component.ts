import { Component } from '@angular/core';

import { ColorsService } from '../../services/colors.service';
import { Color } from '../../models/color';


@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent {

  public header = 'Color Tool';

  public colors: Color[] = [
    { 'id': 1, 'name': 'red', 'hexCode': '#ff0000' },
    { 'id': 2, 'name': 'green', 'hexCode': '#00ff00' },
    { 'id': 3, 'name': 'blue', 'hexCode': '#0000ff' }
  ];

  public colorFilter = '';
  public filteredColorCache = {};
  public lastFilteredColors = this.colors;

  public colorName = '';
  public colorHexCode = '';

  public get filteredColors() {

    if (this.lastFilteredColors !== this.colors) {
      this.filteredColorCache = {};
      this.lastFilteredColors = this.colors;
    }

    if (!this.filteredColorCache[this.colorFilter]) {
      this.filteredColorCache[this.colorFilter] = this.colors.filter(value =>
        value.name.startsWith(this.colorFilter)
      );
    }

    return this.filteredColorCache[this.colorFilter];
  }

  public addColor(color: Color) {

    const newColor = { ...color };
    newColor.id = Math.max(...this.colors.map(c => c.id)) + 1;
    this.colors = this.colors.concat(newColor);
  }

}
