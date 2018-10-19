import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { SearchByArtistService } from "../search-by-artist.service";
import { Venue } from '../Venue';

@Component({
  selector: 'app-map-venue',
  templateUrl: './map-venue.component.html',
  styleUrls: ['./map-venue.component.css']
})
export class MapVenueComponent implements OnInit {

  venueId: number;
  venue: Venue;
  lat: number
  lng: number
  infoWindowOpened = null;

  constructor(
    private _searchbyArtistService: SearchByArtistService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.venueId = params['id'];
      console.log(this.venueId);
      this.venue = this._searchbyArtistService.getChosenVenue();
      console.log(this.venue)
      this.lat = this.venue.lat;
      this.lng = this.venue.lng;
    });
  }

}
