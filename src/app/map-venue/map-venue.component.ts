import { Component, OnInit, Input } from '@angular/core';

import { Venue } from '../Venue';

@Component({
  selector: 'app-map-venue',
  templateUrl: './map-venue.component.html',
  styleUrls: ['./map-venue.component.css']
})
export class MapVenueComponent implements OnInit {

  @Input() venue: Venue;

  lat: number;
  lng: number;

  infoWindowOpened = null;

  constructor( ) { }

  ngOnInit() {

  }

}
