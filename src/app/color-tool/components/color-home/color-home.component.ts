import { Component, OnInit, DoCheck, Pipe, PipeTransform } from '@angular/core';

import { Color } from '../../models/color';


@Pipe({
  name: 'oldFilter',
  pure: false,
})
export class OldFilterPipe implements PipeTransform {

  public transform(values: Color[], filterValue: string) {
    console.log('OldFilterPipe executed');
    return values.filter(value => value.name.startsWith(filterValue));
  }

}


@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit, DoCheck {

  public header = 'Color Tool';
  public colors: Color[] = [
    { id: 1, name: 'blue', hexCode: '' },
    { id: 2, name: 'black', hexCode: '' },
    { id: 3, name: 'green', hexCode: '' },
    { id: 4, name: 'pink', hexCode: '' },
    { id: 5, name: 'maroon', hexCode: '' },
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
      // console.log('running color filter');
      this.filteredColorCache[this.colorFilter] = this.colors.filter(value =>
        value.name.startsWith(this.colorFilter)
      );
    }

    // console.log('getting color filter cache');

    return this.filteredColorCache[this.colorFilter];
  }

  constructor() {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    // console.log('change detection has executed');
  }

  addColor() {
    this.colors = this.colors.concat({
      id: Math.max(...this.colors.map(c => c.id)) + 1,
      name: this.colorName,
      hexCode: this.colorHexCode,
    });
  }

}
