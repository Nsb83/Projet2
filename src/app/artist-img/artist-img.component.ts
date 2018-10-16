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

  public artistDisplayName: string;
  artist: Artist = {
    name: '',
    image: '',
    id: 0,
    onTourUntil: '',
    summary: '',
    uri: '',
};

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.artistDisplayName = params['artistName'];
    });
    this._searchbyArtistService.getImgDescr(this.artistDisplayName).subscribe((res: any) => {
      this.artist.name = res.artist.name;
      this.artist.image = res.artist.image[3]['#text'];
      this.artist.summary = res.artist.bio.summary;
    });
  }
}
