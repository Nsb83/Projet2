import { Component, OnInit } from '@angular/core';
import { City } from '../City';
import { SearchByArtistService } from '../search-by-artist.service';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.css']
})
export class CityPageComponent implements OnInit {

  constructor(private _searchbyArtistService: SearchByArtistService) { }

  city: City;

  ngOnInit() {
    this.city = this._searchbyArtistService.getChosenCity();
  }

}
