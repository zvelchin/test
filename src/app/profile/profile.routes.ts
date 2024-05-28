import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const profileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    pathMatch: 'full',
  },
];

export const ProfileRoutingModule = RouterModule.forChild(profileRoutes);
