import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/pages/home/home.component';
import {AboutComponent} from './home/pages/about/about.component';
import {PageNotFoundComponent} from './home/components/page-not-found/page-not-found.component';

// TODO: To add more routing functionality follow this tutorial: https://angular.io/tutorial/toh-pt5

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  //Wild Card Route for 404 request
  {path: '**', pathMatch: 'full', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
