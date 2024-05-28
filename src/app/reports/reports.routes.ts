import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';

const reportsRoutes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    pathMatch: 'full',
  },
];

export const ReportsRoutingModule = RouterModule.forChild(reportsRoutes);
