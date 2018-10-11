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
import { SearchInputService } from './search-input.service';
import { SearchByArtistService } from './search-by-artist.service'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'results', component: ResultsPageComponent },
  { path: 'results/:value', component: ResultsPageComponent }
  // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    ResultsPageComponent,
    NavbarComponent,
    ResultsListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    // FormsModule
  ],
  providers: [
    SearchInputService,
    SearchByArtistService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
