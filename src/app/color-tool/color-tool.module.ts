import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { ColorFormComponent } from './components/color-form/color-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule],
  declarations: [ColorHomeComponent, ToolHeaderComponent, ColorFormComponent],
  exports: [ColorHomeComponent],
})
export class ColorToolModule { }
