import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './dark-mode/home/home.component';
import { CareerComponent } from './dark-mode/career/career.component';
import { OverlayComponent } from './dark-mode/home/overlay/overlay.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CareerComponent, OverlayComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
