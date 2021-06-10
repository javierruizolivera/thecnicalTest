import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageModule } from './views/welcome-page/welcome-page.module';
import { HomeModule } from './views/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, WelcomePageModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
