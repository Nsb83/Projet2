import { Component, OnInit } from '@angular/core';
import { SearchByArtistService } from "../search-by-artist.service";
import { ActivatedRoute } from "@angular/router";
import { Venue } from '../Venue';

@Component({
  selector: 'app-concert-list-venue',
  templateUrl: './concert-list-venue.component.html',
  styleUrls: ['./concert-list-venue.component.css']
})
export class ConcertListVenueComponent implements OnInit {

  venue: Venue;
  concerts = [];
  page: number = 1;

  constructor(
    private _searchbyArtistService: SearchByArtistService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(() => {
        this.venue = this._searchbyArtistService.getChosenVenue();
        this._searchbyArtistService.getVenueConcerts(this.venue.id)
          .subscribe(data => this.concerts = data.resultsPage.results.event);
      });

    
      
  }
  onPageChange(page: number) {
    this.page = page;
  }
}