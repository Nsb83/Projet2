import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../Artist';
import { Video } from '../Video';

@Component({
  selector: 'app-artist-video',
  templateUrl: './artist-video.component.html',
  styleUrls: ['./artist-video.component.css']
})
export class ArtistVideoComponent implements OnInit {

  constructor( ) { }

  @Input() artist: Artist;
  @Input() videos: Video[];

  player: YT.Player;

  ngOnInit() {
  }

  savePlayer(player) {
    this.player = player;
  }

  onChoosingVideo(videoId) {
    this.player.loadVideoById(videoId);
  }
}
