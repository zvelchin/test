import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

export const HomeRoutingModule = RouterModule.forChild(homeRoutes);
