import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProfileRoutingModule } from './profile.routes';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputMaskModule,
    ProfileRoutingModule,
    ToastModule,
  ],
  providers: [MessageService],
})
export class ProfileModule {}
