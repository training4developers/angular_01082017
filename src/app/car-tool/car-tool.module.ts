import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarHomeComponent } from './components/car-home/car-home.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [CarHomeComponent],
  exports: [CarHomeComponent]
})
export class CarToolModule { }
