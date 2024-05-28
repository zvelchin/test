import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
        data: { title: 'Home' },
      },
      {
        path: 'inventory',
        loadChildren: () =>
          import('./inventory/inventory.module').then((m) => m.InventoryModule),
        data: { title: 'Inventory' },
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./reports/reports.module').then((m) => m.ReportsModule),
        data: { title: 'Reports' },
      },
      {
        path: 'billing',
        loadChildren: () =>
          import('./billing/billing.module').then((m) => m.BillingModule),
        data: { title: 'Billing' },
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
        data: { title: 'Profile' },
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

export const AppRoutingModule = RouterModule.forChild(appRoutes);
