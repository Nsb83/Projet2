import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchByArtistService {

  public artistDisplayName:string 
  private _url: string;
  private _artistUrl: string;
  private _imgDescr: string;

  constructor(
    private http: HttpClient,
  ) { }

  getArtistConcerts(artistId): Observable<any> {
    this._artistUrl = `https://api.songkick.com/api/3.0/artists/${artistId}/calendar.json?apikey=R82Hox7PJZDJyV0G`;
    return this.http.get<any>(this._artistUrl);
  }

  getResults(userInput): Observable<any> {
    this._url = `https://api.songkick.com/api/3.0/search/artists.json?apikey=R82Hox7PJZDJyV0G&query=${userInput}`;
    return this.http.get<any>(this._url);
  }

  getImgDescr(artistDisplayName): Observable<any> {
    this._imgDescr = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistDisplayName}&api_key=9b7579d5f409106928353935ac0ab5ab&format=json`
    console.log(this._imgDescr)
    return this.http.get<any>(this._imgDescr);
  }

  getVenues(venueName){

      
    return this.http.get<any>(`https://api.songkick.com/api/3.0/search/venues.json?query=${venueName}&apikey={y}our_api_key
      `);

  }
}
