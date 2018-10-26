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

  artist: Artist;

  artistId: number;
  concerts: Concert[];

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.artistId = params['id'];
      if (this._searchByArtistService.chosenArtist && this._searchByArtistService.getChosenArtist().id === this.artistId) {
        this.artist = this._searchByArtistService.getChosenArtist();
      } else {
      this._searchByArtistService.getOneArtist(this.artistId)
        .subscribe(res => {
          let obj = res.resultsPage.results.artist;
          this.artist = new Artist(
              obj.displayName,
              obj.id,
              obj.onTourUntil,
              obj.uri
            );

            this._searchByArtistService.getImgDescr(obj.displayName)
            .subscribe(data => {
              this.artist.image = data.artist.image[3]['#text'];
              this.artist.summary = data.artist.bio.summary;
            });
          });
        }

        this.concerts = this._searchByArtistService.getArtistConcerts(this.artistId);
    });
  }

}
