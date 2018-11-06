import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SearchByArtistService } from '../search-by-artist.service';
import { Artist } from '../Artist';
import { Video } from '../Video';

@Component({
  selector: 'app-artist-video',
  templateUrl: './artist-video.component.html',
  styleUrls: ['./artist-video.component.css']
})
export class ArtistVideoComponent implements OnInit, OnChanges {
  // id =  "tAGnKpE4NCI"
  // id: string;

  constructor(
    private _searchByArtistService: SearchByArtistService,
  ) { }

  public video: Video;

  @Input() artist: Artist;
  @Input() videos: Video[];

  ngOnInit() {

  }

  ngOnChanges() {
    setTimeout(() => this.video = this.videos[1], 0.001);
    // this.video = this.videos[0]
  }
}
