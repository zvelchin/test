import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const authRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AuthComponent,
  },
];

export const AuthRoutingModule = RouterModule.forChild(authRoutes);
