import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { SearchByArtistService } from '../search-by-artist.service';
import { Venue } from '../Venue';
import { Concert } from '../Concert';

@Component({
  selector: 'app-venue-page',
  templateUrl: './venue-page.component.html',
  styleUrls: ['./venue-page.component.css']
})
export class VenuePageComponent implements OnInit {

  constructor(
    private _searchByArtistService: SearchByArtistService,
    private route: ActivatedRoute
    ) { }

  venue: Venue;
  venueId: number;
  concerts: Concert[];

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.venueId = params['id'];
      if (this._searchByArtistService.chosenVenue && this._searchByArtistService.getChosenVenue().id === this.venueId) {
        this.venue = this._searchByArtistService.getChosenVenue();
      } else {
        this._searchByArtistService.getOneVenue(this.venueId)
        .subscribe(res => {
          const obj = res.resultsPage.results.venue;
          this.venue = new Venue(
            obj.displayName,
            obj.city.displayName,
            obj.city.country.displayName,
            obj.street,
            obj.zip,
            obj.uri,
            obj.id,
            obj.lat,
            obj.lng,
            obj.website,
            obj.description
            );
          });
        }
    this.concerts = this._searchByArtistService.getVenueConcerts(this.venueId);
    });
  }

  onReceivingDates(dates: String[]) {
    this.concerts = this._searchByArtistService.getVenueConcertsFilteredByDate(this.venueId, dates[0], dates[1]);
  }
}
