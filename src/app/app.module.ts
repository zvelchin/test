import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CommonModule, MenuModule],
})
export class AppModule {}
