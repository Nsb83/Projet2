import { Component, OnInit } from '@angular/core';
import { SearchByArtistService } from "../search-by-artist.service";
import { ActivatedRoute } from "@angular/router";
import { City } from '../City';

@Component({
  selector: 'app-concert-list-city',
  templateUrl: './concert-list-city.component.html',
  styleUrls: ['./concert-list-city.component.css']
})
export class ConcertListCityComponent implements OnInit {

  city: City;
  concerts = [];
  page: number = 1;

  constructor(
    private _searchbyArtistService: SearchByArtistService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
      this.route.params.subscribe(() => {
          this.city = this._searchbyArtistService.getChosenCity();
          this._searchbyArtistService.getCityConcerts(this.city.id)
            .subscribe(data => this.concerts = data.resultsPage.results.event);
        });
  }

}
