import { Component, OnInit } from '@angular/core';
import { SearchByArtistService } from '../search-by-artist.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Artist } from '../Artist';
import { Concert } from '../Concert';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {

  constructor(
    private _searchByArtistService: SearchByArtistService,
    private route: ActivatedRoute
  ) { }

  artistId: number;
  artist: Artist;
  concerts: Concert[];

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.artistId = params['id'];
      this.artist = this._searchByArtistService.getChosenArtist();
      this._searchByArtistService.getArtistConcerts(this.artist.id)
        .subscribe(data => this.concerts = data.resultsPage.results.event);
    });
  }

}
