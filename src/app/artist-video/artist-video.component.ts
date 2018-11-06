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
  id:string = "";
  private player;
  private ytEvent;

  constructor(
    private _searchByArtistService: SearchByArtistService,
  ) { }

  videos: Video[];
  video:Video;

  // onStateChange(event) {
  //   this.ytEvent = event.data;
  // }
  // savePlayer(player) {
  //   this.player = player;
  // }

  @Input() artist: Artist;

  ngOnInit() {

  }

  ngOnChanges() {
    this.videos = this._searchByArtistService.getArtistVideo(this.artist.name);
  }

}
