import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../Artist';

@Component({
  selector: 'app-artist-img',
  templateUrl: './artist-img.component.html',
  styleUrls: ['./artist-img.component.css']
})
export class ArtistImgComponent implements OnInit {

  constructor(
    ) { }

  @Input() artist: Artist;

  ngOnInit() {
  }
}
