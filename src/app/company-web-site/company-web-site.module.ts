import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { companyWebSiteRouterModule } from './company-web-site.router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  imports: [
    CommonModule, companyWebSiteRouterModule
  ],
  declarations: [HomeComponent, AboutComponent, ContactComponent],
  exports: [HomeComponent, AboutComponent, ContactComponent],
})
export class CompanyWebSiteModule { }
