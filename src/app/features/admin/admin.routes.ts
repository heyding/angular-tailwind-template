import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/admin-dashboard/admin-dashboard.component').then(
            m => m.AdminDashboardComponent
          ),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./pages/admin-users/admin-users.component').then(m => m.AdminUsersComponent),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/admin-settings/admin-settings.component').then(
            m => m.AdminSettingsComponent
          ),
      },
    ],
  },
];
