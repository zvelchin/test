import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';

const inventoryRoutes: Routes = [
  { path: '', component: InventoryComponent, pathMatch: 'full' },
];

export const InventoryRoutingModule = RouterModule.forChild(inventoryRoutes);
