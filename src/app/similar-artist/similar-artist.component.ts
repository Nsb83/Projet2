import { Component, OnInit, Input } from '@angular/core';
import { SearchByArtistService } from '../search-by-artist.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Artist } from '../Artist';
import { SimilarArtist } from '../similar-artist'

@Component({
  selector: 'app-similar-artist',
  templateUrl: './similar-artist.component.html',
  styleUrls: ['./similar-artist.component.css']
})
export class SimilarArtistComponent implements OnInit {

@Input() SimilarArtists:SimilarArtist[];

  constructor(
  ) { }

  ngOnInit() {
    }
 
}
