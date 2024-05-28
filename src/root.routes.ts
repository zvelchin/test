import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './app/not-found/not-found.component';
import { isUnauthorized, isAuthorized } from './service/auth.guard';

const rootRoutes: Routes = [
  {
    path: 'auth',
    canMatch: [isUnauthorized],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'app',
    canMatch: [isAuthorized],
    loadChildren: () => import('./app/app.module').then((m) => m.AppModule),
  },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];

export const RootRoutingModule = RouterModule.forRoot(rootRoutes);
