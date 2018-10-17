import { Component, OnInit } from '@angular/core';
import { SearchByArtistService } from "../search-by-artist.service";
import { Artist } from '../Artist'

@Component({
  selector: 'app-artist-img',
  templateUrl: './artist-img.component.html',
  styleUrls: ['./artist-img.component.css']
})
export class ArtistImgComponent implements OnInit {

  constructor(
    private _searchbyArtistService: SearchByArtistService
    ) { }

  artist: Artist;

  ngOnInit() {
    this.artist = this._searchbyArtistService.getChosenArtist();
  }
}
