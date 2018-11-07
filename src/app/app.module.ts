import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { ResultsPageComponent } from './results-page/results-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { SearchByArtistService } from './search-by-artist.service';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { ConcertListComponent } from './concert-list/concert-list.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { ArtistImgComponent } from './artist-img/artist-img.component';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { NgxPaginationModule } from 'ngx-pagination';
import { VenuePageComponent } from './venue-page/venue-page.component';
import { ConcertListVenueComponent } from './concert-list-venue/concert-list-venue.component';
import { MapVenueComponent } from './map-venue/map-venue.component';
import { CityPageComponent } from './city-page/city-page.component';
import { ConcertListCityComponent } from './concert-list-city/concert-list-city.component';
import { MapCityComponent } from './map-city/map-city.component';
import { SimilarArtistComponent } from './similar-artist/similar-artist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FormsModule } from '@angular/forms';




const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'results', component: ResultsPageComponent },
  { path: 'results/:value', component: ResultsPageComponent },
  { path: 'artist/:id', component: ArtistPageComponent },
  { path: 'venue/:id', component: VenuePageComponent },
  { path: 'city/:id', component: CityPageComponent },
  { path: 'datePicker', component: DatePickerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    ResultsPageComponent,
    NavbarComponent,
    ResultsListComponent,
    ArtistPageComponent,
    ConcertListComponent,
    MapComponent,
    ArtistImgComponent,
    VenuePageComponent,
    ConcertListVenueComponent,
    MapVenueComponent,
    CityPageComponent,
    ConcertListCityComponent,
    MapCityComponent,
    SimilarArtistComponent,
    DatePickerComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQ0W8cM7rJsvHPWQ0g0oU9DNBhlpKr-Lc'
    }),
    AgmSnazzyInfoWindowModule,
    NgbModule,
    FormsModule
  ],

  providers: [
    SearchByArtistService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
