import { Component, OnInit} from '@angular/core';
import { SearchByArtistService } from "../search-by-artist.service";
import { SearchInputService } from '../search-input.service';


@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})



export class ResultsListComponent implements OnInit {

  public userInput: string;
  public artists: any;
  // public artistArray = this.artists.resultsPage.results.artist;

  constructor(
    private _searchbyArtistService: SearchByArtistService,
    private _searchInputService: SearchInputService
    ) { }

  ngOnInit() {
    this._searchbyArtistService.getResults()
      .subscribe(data => this.artists = data);
    this.userInput = this._searchInputService.getSearchInput();
  }

}


// https://api.songkick.com/api/3.0/artists/mbid:a523bd85-01ad-4815-aaac-2b95c1946088/calendar.json?apikey=R82Hox7PJZDJyV0G
// https://api.songkick.com/api/3.0/search/artists.json?apikey=R82Hox7PJZDJyV0G&query=oldelaf
