import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';


import { AppComponent } from './app.component';
import { NavbarComponent } from './Landing/navbar/navbar.component';
import { SliderComponent } from './Landing/slider/slider.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { ServicesComponent } from './Landing/services/services.component';
import { AboutComponent } from './Landing/about/about.component';
import { TeamComponent } from './Landing/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    AboutComponent,
    TeamComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
