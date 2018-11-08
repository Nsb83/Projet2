import { Component, OnInit, Input } from '@angular/core';
import { Concert } from '../Concert';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() concerts: Concert[];

  lat: number = 41.485818;
  lng: number = 5.618187;
  infoWindowOpened = null;

  constructor(
  ) { }

  ngOnInit() {

  }
}
