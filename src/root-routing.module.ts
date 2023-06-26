import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthorized, isUnauthorized } from './service/auth.guard';

const routes: Routes = [
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
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: '**', redirectTo: 'app', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
