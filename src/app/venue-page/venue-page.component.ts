import { Component, OnInit } from '@angular/core';
import { SearchByArtistService } from "../search-by-artist.service";
import { Venue } from '../Venue'

@Component({
  selector: 'app-venue-page',
  templateUrl: './venue-page.component.html',
  styleUrls: ['./venue-page.component.css']
})
export class VenuePageComponent implements OnInit {

  constructor(private _searchbyArtistService: SearchByArtistService) { }
   venue: Venue;
  ngOnInit() {
  this.venue = this._searchbyArtistService.getChosenVenue();
  }

}
