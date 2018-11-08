import { Component, OnInit, Input } from '@angular/core';

import { Concert } from '../Concert';
import { City } from '../City';



@Component({
  selector: 'app-map-city',
  templateUrl: './map-city.component.html',
  styleUrls: ['./map-city.component.css']
})
export class MapCityComponent implements OnInit {

  @Input() concerts: Concert[];
  @Input() city: City;

  lat: number;
  lng: number;
  infoWindowOpened = null;

  constructor(

  ) { }

  ngOnInit() {
  }

}

