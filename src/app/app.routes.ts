import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { AboutComponent } from './features/home/pages/about/about.component';
import { ComponentsDemoComponent } from './features/home/pages/components-demo/components-demo.component';
import { PageNotFoundComponent } from './features/home/components/page-not-found/page-not-found.component';
import { LoginComponent } from './features/home/pages/login/login.component';
import { ApiDemoComponent } from './features/home/pages/api-demo/api-demo.component';
import { FeaturesDemoComponent } from './features/home/pages/features-demo/features-demo.component';
import { VirtualScrollDemoComponent } from './features/home/pages/virtual-scroll-demo/virtual-scroll-demo.component';
import { DragDropDemoComponent } from './features/home/pages/drag-drop-demo/drag-drop-demo.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'components', component: ComponentsDemoComponent },
  { path: 'api-demo', component: ApiDemoComponent },
  { path: 'features-demo', component: FeaturesDemoComponent },
  { path: 'virtual-scroll', component: VirtualScrollDemoComponent },
  { path: 'drag-drop', component: DragDropDemoComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES),
  },
  { path: 'not-found', component: PageNotFoundComponent },
  // Wild Card Route for 404 request - make sure this is always the last element
  { path: '**', pathMatch: 'full', redirectTo: 'not-found' },
];
