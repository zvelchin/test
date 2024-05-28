import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AuthRoutingModule } from './auth.routes';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    ToastModule,
  ],
  providers: [MessageService],
})
export class AuthModule {}
