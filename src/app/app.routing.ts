import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './company-web-site/components/home/home.component';
// import { AboutComponent } from './company-web-site/components/about/about.component';
// import { ContactComponent } from './company-web-site/components/contact/contact.component';

// import { ContactTypesResolve } from './services/contact-types-resolve';

import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'company', loadChildren: 'app/company-web-site/company-web-site.module#CompanyWebSiteModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

export const appRouterModule = RouterModule.forRoot(appRoutes, { useHash: true });
