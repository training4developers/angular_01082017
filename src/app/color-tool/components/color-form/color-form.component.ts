import {
  Component, OnInit, Output, EventEmitter
} from '@angular/core';

import { Color } from '../../models/color';

@Component({
  selector: 'color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  public colorName = '';
  public colorHexCode = '';

  @Output()
  public saveColor = new EventEmitter<Color>();

  constructor() { }

  ngOnInit() {
  }

  public saveColorForm() {
    this.saveColor.emit({
      name: this.colorName,
      hexCode: this.colorHexCode,
    });

    this.colorName = '';
    this.colorHexCode = '';
  }

}
