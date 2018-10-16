import { Component, OnInit } from '@angular/core';
import { SearchByArtistService } from "../search-by-artist.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-concert-list',
  templateUrl: './concert-list.component.html',
  styleUrls: ['./concert-list.component.css']
})
export class ConcertListComponent implements OnInit {

  artistId: number;
  concerts = [];

  constructor(
    private _searchbyArtistService: SearchByArtistService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
        this.artistId = params['id'];
        this._searchbyArtistService.getArtistConcerts(this.artistId)
          .subscribe(data => this.concerts = data.resultsPage.results.event);
      });
  }

}
