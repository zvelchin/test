import { NgModule } from '@angular/core';
import { BillingComponent } from './billing.component';
import { CommonModule } from '@angular/common';
import { BillingRoutingModule } from './billing-routing.module';

@NgModule({
  declarations: [BillingComponent],
  imports: [CommonModule, BillingRoutingModule],
})
export class BillingModule {}
