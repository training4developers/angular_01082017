import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ColorToolModule } from './color-tool/color-tool.module';
import { CarToolModule } from './car-tool/car-tool.module';

import { MyFirstService } from './services/my-first.service';
import { MySecondService } from './services/my-second.service';

import { MyFirstPipe } from './pipes/my-first.pipe';
import { AppComponent, PhoneNumberValidatorDirective } from './app.component';

@NgModule({
  declarations: [
    AppComponent, MyFirstPipe, PhoneNumberValidatorDirective,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, ColorToolModule, CarToolModule,
  ],
  providers: [ MyFirstService, MySecondService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
