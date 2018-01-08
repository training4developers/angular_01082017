import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ColorHomeComponent, OldFilterPipe } from './components/color-home/color-home.component';

@NgModule({
  imports: [
    CommonModule, FormsModule,
  ],
  declarations: [ColorHomeComponent, OldFilterPipe],
  exports: [ColorHomeComponent],
})
export class ColorToolModule { }
