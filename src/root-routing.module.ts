import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthorized, isUnauthorized } from './service/auth.guard';
import { NotFoundComponent } from './app/not-found/not-found.component';

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
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
