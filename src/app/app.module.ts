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
import { ArtistImgComponent } from './artist-img/artist-img.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'results', component: ResultsPageComponent },
  { path: 'results/:value', component: ResultsPageComponent },
  { path: 'artist/:id/:artistName', component: ArtistPageComponent },
  { path: 'artist-img', component: ArtistImgComponent },
  { path: 'artist-img/:Muse', component: ArtistImgComponent },
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
    ArtistImgComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [
    SearchByArtistService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
