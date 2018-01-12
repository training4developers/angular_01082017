import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './company-web-site/components/home/home.component';
import { AboutComponent } from './company-web-site/components/about/about.component';
import { ContactComponent } from './company-web-site/components/contact/contact.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

export const appRouterModule = RouterModule.forRoot(appRoutes, { useHash: true });
