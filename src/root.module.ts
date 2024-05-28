import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootComponent } from './root.component';
import { NotFoundModule } from './app/not-found/not-found.module';
import { RootRoutingModule } from './root.routes';

@NgModule({
  declarations: [RootComponent],
  imports: [
    RootRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NotFoundModule,
  ],
  bootstrap: [RootComponent],
})
export class RootModule {}
