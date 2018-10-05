import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { IArtist } from './classes/iartist';
import { Observable } from 'rxjs';
import { SearchInputService } from './search-input.service';

@Injectable({
  providedIn: 'root'
})
export class SearchByArtistService {

  public userInput: string = this._searchInputService.getSearchInput();
  private _url: string = `https://api.songkick.com/api/3.0/search/artists.json?apikey=R82Hox7PJZDJyV0G&query=${this.userInput}`;

  constructor(
    private http: HttpClient,
    private _searchInputService: SearchInputService
  ) { }

  getResults(): Observable<any> {
    return this.http.get<any>(this._url);
  }
}
