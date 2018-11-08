import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SearchByArtistService } from '../search-by-artist.service';
import { Artist } from '../Artist';
import { Concert } from '../Concert';


@Component({
  selector: 'app-concert-list-city',
  templateUrl: './concert-list-city.component.html',
  styleUrls: ['./concert-list-city.component.css']
})
export class ConcertListCityComponent implements OnInit, OnChanges {

  @Input() concerts: Concert [];

  page = 1;

  constructor(
    private _searchByArtistService: SearchByArtistService
    ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.page = 1;
  }

  onChoosingArtist(artistId) {
    this._searchByArtistService.getOneArtist(artistId)
    .subscribe(res => {
      const obj = res.resultsPage.results.artist;
      const artist = new Artist(
          obj.displayName,
          obj.id,
          obj.onTourUntil,
          obj.uri
        );

        this._searchByArtistService.getImgDescr(obj.displayName)
        .subscribe(data => {
          artist.image = data.artist.image[3]['#text'];
          artist.summary = data.artist.bio.summary;
        });

      this._searchByArtistService.setChosenArtist(artist);
      });
  }

  onPageChange(page: number) {
    window.scrollTo({ top: 650, behavior: 'smooth' });
    setTimeout(() => (this.page = page), 200);
  }

}
