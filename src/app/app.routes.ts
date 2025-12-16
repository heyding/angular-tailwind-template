import { Routes } from '@angular/router';
import { HomeComponent } from './home/pages/home/home.component';
import { AboutComponent } from './home/pages/about/about.component';
import { PageNotFoundComponent } from './home/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  // Wild Card Route for 404 request - make sure this is always the last element
  { path: '**', pathMatch: 'full', redirectTo: 'not-found' },
];
