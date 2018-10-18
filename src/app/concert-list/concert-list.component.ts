import { Component, OnInit } from '@angular/core';
import { SearchByArtistService } from "../search-by-artist.service";
import { ActivatedRoute } from "@angular/router";
import { Artist } from '../Artist';

@Component({
  selector: 'app-concert-list',
  templateUrl: './concert-list.component.html',
  styleUrls: ['./concert-list.component.css']
})
export class ConcertListComponent implements OnInit {

  artist: Artist;
  concerts = [];
  page: number = 1;

  constructor(
    private _searchbyArtistService: SearchByArtistService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(() => {
        this.artist = this._searchbyArtistService.getChosenArtist();
        this._searchbyArtistService.getArtistConcerts(this.artist.id)
          .subscribe(data => this.concerts = data.resultsPage.results.event);
      });
  }
  onPageChange(page: number) {
    this.page = page;
  }
}
