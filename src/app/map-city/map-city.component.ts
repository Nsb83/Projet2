import { Component, OnInit } from '@angular/core';
import { SearchByArtistService } from "../search-by-artist.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { City } from '../City';


@Component({
  selector: 'app-map-city',
  templateUrl: './map-city.component.html',
  styleUrls: ['./map-city.component.css']
})
export class MapCityComponent implements OnInit {

  cityId: number;
  concerts = [];
  lat: number;
  lng: number;
  infoWindowOpened = null;
  city: City;

  constructor(
    private _searchbyArtistService: SearchByArtistService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.route.params.subscribe((params: ParamMap) => {
        this.cityId = params['id'];
        this.city = this._searchbyArtistService.getChosenCity();
        this.lat = this.city.lat;
        this.lng = this.city.lng;
        this._searchbyArtistService.getCityConcerts(this.cityId)
          .subscribe(data => this.concerts = data.resultsPage.results.event);
      });
  }

}
