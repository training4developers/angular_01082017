import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

const companyWebSiteRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

export const companyWebSiteRouterModule = RouterModule.forChild(companyWebSiteRoutes);
