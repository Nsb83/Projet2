import { Component, OnInit } from '@angular/core';
import { SearchByArtistService } from "../search-by-artist.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Artist } from '../Artist'

@Component({
  selector: 'app-artist-img',
  templateUrl: './artist-img.component.html',
  styleUrls: ['./artist-img.component.css']
})
export class ArtistImgComponent implements OnInit {

  constructor(
    private _searchbyArtistService: SearchByArtistService,
    private route: ActivatedRoute
    ) { }

  artist: Artist;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.artist = this._searchbyArtistService.getChosenArtist();
    });
  }
}
