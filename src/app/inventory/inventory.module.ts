import { NgModule } from '@angular/core';
import { InventoryComponent } from './inventory.component';
import { CommonModule } from '@angular/common';
import { InventoryRoutingModule } from './inventory-routing.module';

@NgModule({
  declarations: [InventoryComponent],
  imports: [CommonModule, InventoryRoutingModule],
})
export class InventoryModule {}
