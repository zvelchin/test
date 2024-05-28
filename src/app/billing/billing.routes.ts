import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing.component';

const billingRoutes: Routes = [
  {
    path: '',
    component: BillingComponent,
    pathMatch: 'full',
  },
];

export const BillingRoutingModule = RouterModule.forChild(billingRoutes);
