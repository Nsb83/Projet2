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
import { ArtistPageComponent } from "./artist-page/artist-page.component";
import { ConcertListComponent } from './concert-list/concert-list.component';
<<<<<<< HEAD
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
=======
import { ArtistImgComponent } from './artist-img/artist-img.component'
>>>>>>> 54f47227c436ea20314d3398a86ddc9a55c26ff9

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'results', component: ResultsPageComponent },
  { path: 'results/:value', component: ResultsPageComponent },
<<<<<<< HEAD
  { path: 'artist/:id', component: ArtistPageComponent },
  { path: 'map', component: MapComponent}
=======
  { path: 'artist/:id/:artistName', component: ArtistPageComponent },
  { path: 'artist-img', component: ArtistImgComponent },
  { path: 'artist-img/:Muse', component: ArtistImgComponent },
>>>>>>> 54f47227c436ea20314d3398a86ddc9a55c26ff9
]

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
<<<<<<< HEAD
    MapComponent,
=======
    ArtistImgComponent,
>>>>>>> 54f47227c436ea20314d3398a86ddc9a55c26ff9
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQ0W8cM7rJsvHPWQ0g0oU9DNBhlpKr-Lc'
    })
  ],
  
  providers: [
    SearchByArtistService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
