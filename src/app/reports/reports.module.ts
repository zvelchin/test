import { NgModule } from '@angular/core';
import { ReportsComponent } from './reports.component';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports.routes';

@NgModule({
  declarations: [ReportsComponent],
  imports: [CommonModule, ReportsRoutingModule],
})
export class ReportsModule {}
