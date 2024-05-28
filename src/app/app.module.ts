import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CommonModule, MenuModule],
})
export class AppModule {}
