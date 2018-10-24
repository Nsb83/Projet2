import { Component, OnInit } from '@angular/core';
import { SearchByArtistService } from "../search-by-artist.service";
import { ActivatedRoute } from "@angular/router";
import { Venue } from '../Venue';
import { Concert } from '../Concert';

@Component({
  selector: 'app-concert-list-venue',
  templateUrl: './concert-list-venue.component.html',
  styleUrls: ['./concert-list-venue.component.css']
})
export class ConcertListVenueComponent implements OnInit {

  salleDeConcert : Venue;
  concerts: Concert[];
  page: number = 1;

  constructor(
    private _searchbyArtistService: SearchByArtistService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.route.params.subscribe(() => {
        this.salleDeConcert = this._searchbyArtistService.getChosenVenue();

        this._searchbyArtistService.getVenueConcerts(this.salleDeConcert.id)
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
  
  onPageChange(page: number) {
    this.page = page;
  }
}