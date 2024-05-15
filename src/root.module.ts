import { NgModule } from '@angular/core';
import { RootRoutingModule } from './root-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootComponent } from './root.component';
import { NotFoundModule } from './app/not-found/not-found.module';

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
