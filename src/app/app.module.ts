import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AgmCoreModule } from '@agm/core';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDVtAgM3cg8uQ5ejsnerIGoXkWpWHH17Hk'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
