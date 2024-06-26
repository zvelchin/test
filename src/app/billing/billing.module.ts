import { NgModule } from '@angular/core';
import { BillingComponent } from './billing.component';
import { CommonModule } from '@angular/common';
import { BillingRoutingModule } from './billing.routes';

@NgModule({
  declarations: [BillingComponent],
  imports: [CommonModule, BillingRoutingModule],
})
export class BillingModule {}
