import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchByArtistService {

  private _url: string;

  constructor(
    private http: HttpClient,
  ) { }

  getResults(userInput): Observable<any> {
    this._url = `https://api.songkick.com/api/3.0/search/artists.json?apikey=R82Hox7PJZDJyV0G&query=${userInput}`;
    return this.http.get<any>(this._url);
  }
}
