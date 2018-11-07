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

  // public video: Video;

  @Input() artist: Artist;
  @Input() videos: Video[];

  player: YT.Player;

  ngOnInit() {
  console.log(this.videos);
  }

  ngOnChanges() {
    // setTimeout(() => this.video = this.videos[0]);
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }

  onChoosingVideo(videoId) {
    this.player.loadVideoById(videoId);
  }
}
