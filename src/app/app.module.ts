import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ColorToolModule } from './color-tool/color-tool.module';
import { CarToolModule } from './car-tool/car-tool.module';

import { MyFirstService } from './services/my-first.service';
import { MySecondService } from './services/my-second.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    HttpClientModule, ColorToolModule, CarToolModule,
  ],
  providers: [ MyFirstService, MySecondService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
