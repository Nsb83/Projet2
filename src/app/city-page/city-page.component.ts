import { Component, OnInit } from '@angular/core';

import { SearchByArtistService } from '../search-by-artist.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { City } from '../City';
import { Concert } from '../Concert';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.css']
})
export class CityPageComponent implements OnInit {

  constructor(
    private _searchByArtistService: SearchByArtistService,
    private route: ActivatedRoute
    ) { }

  city: City;
  cityId: number;
  concerts: Concert[];

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.cityId = params['id'];
      if (this._searchByArtistService.chosenCity) {
        this.city = this._searchByArtistService.getChosenCity();
      } else {
      this._searchByArtistService.getOneCity(this.cityId)
        .subscribe(res => {
          let obj = res.resultsPage.results.event[0].venue;
          this.city = new City(
              obj.metroArea.id,
              obj.metroArea.uri,
              obj.metroArea.displayName,
              obj.metroArea.country.displayName,
              obj.lat,
              obj.lng
            );
        });
      }

      this.concerts = this._searchByArtistService.getCityConcerts(this.cityId);
      };
    }
  }
