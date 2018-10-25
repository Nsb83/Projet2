import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SearchByArtistService } from '../search-by-artist.service';
import { Artist } from '../Artist';

@Component({
  selector: 'app-artist-img',
  templateUrl: './artist-img.component.html',
  styleUrls: ['./artist-img.component.css']
})
export class ArtistImgComponent implements OnChanges {

  constructor(
    private _searchbyArtistService: SearchByArtistService
    ) { }

  @Input() artist: Artist;

  ngOnChanges() {

  }

  // OnDestroy(){


  // }

  // getFromLocalStorage(): Artist {
  //   // Récupération des artciles en format 'string'
  //   const stringData = localStorage.getItem('articles');
  //   // Converstion des données de type 'string' en objet Javascript
  //   const articles: Article[] = JSON.parse(stringData);

  //   return articles;
  // }
}
