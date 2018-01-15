import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ColorToolModule } from './color-tool/color-tool.module';
import { CarToolModule } from './car-tool/car-tool.module';
// import { CompanyWebSiteModule } from './company-web-site/company-web-site.module';

import { MyFirstService } from './services/my-first.service';
import { MySecondService } from './services/my-second.service';
import { WebSocketDemoService } from './services/web-socket-demo.service';

import { AppComponent } from './app.component';

import { appRouterModule } from './app.routing';
import { HomePageComponent } from './components/home-page/home-page.component';

import { ContactTypesResolve } from './services/contact-types-resolve';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { SharedLibModule } from 'shared-lib';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    HttpClientModule, ColorToolModule, CarToolModule,
    appRouterModule, SharedLibModule
  ],
  providers: [
    MyFirstService, MySecondService, WebSocketDemoService,
    // { provide: HTTP_INTERCEPTORS, useClass: AuthorizationTokenInterceptor, multi: true },
    // { provide: 'contactTypes', useValue: () => [ 'phone', 'email', 'chat', 'smoke signals' ] },
    ContactTypesResolve,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
