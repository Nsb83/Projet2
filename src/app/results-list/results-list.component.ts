import { Component, OnInit } from '@angular/core';
import { SearchByArtistService } from "../search-by-artist.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";


@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})

export class ResultsListComponent implements OnInit {


  constructor(
    private _searchbyArtistService: SearchByArtistService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  public userInput: string;
  public artists = [];

  onChoosing(id) {
    this.router.navigate(['/artist', id]);
  }

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
        this.userInput = params['value'];
        this._searchbyArtistService.getResults(this.userInput)
          .subscribe(data => this.artists = data.resultsPage.results.artist);
      });
  }
}


// https://api.songkick.com/api/3.0/artists/mbid:a523bd85-01ad-4815-aaac-2b95c1946088/calendar.json?apikey=R82Hox7PJZDJyV0G
// https://api.songkick.com/api/3.0/search/artists.json?apikey=R82Hox7PJZDJyV0G&query=oldelaf


