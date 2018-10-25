import { Component, OnInit } from '@angular/core';
import { SearchByArtistService } from "../search-by-artist.service";
import { ActivatedRoute } from "@angular/router";
import { City } from '../City';
import { Concert } from '../Concert';

@Component({
  selector: 'app-concert-list-city',
  templateUrl: './concert-list-city.component.html',
  styleUrls: ['./concert-list-city.component.css']
})
export class ConcertListCityComponent implements OnInit {

  city: City;
  concerts: Concert [];
  page: number = 1;

  constructor(
    private _searchbyArtistService: SearchByArtistService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
      this.route.params.subscribe(() => {
          this.city = this._searchbyArtistService.getChosenCity();
          this._searchbyArtistService.getCityConcerts(this.city.id)
            .subscribe((reponse: any) => { 
              this.concerts = [];
              let concertTable = reponse.resultsPage.results.event;
              for (let concert of concertTable) {
                let aConcert = new Concert(
                  concert.displayName,
                  concert.performance[0].displayName,
                  concert.venue.displayName,
                  concert.id,
                  concert.uri,
                  concert.location.city,
                  concert.location.lat,
                  concert.location.lng,
                  concert.start.datetime
                );
  
                this.concerts.push(aConcert);
              }        
              
        });
  });
  }
}
