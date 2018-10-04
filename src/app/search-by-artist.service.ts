import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IArtist } from './classes/iartist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchByArtistService {

  private _url: string = `../assets/fakeResults/results.json`;

  constructor(private http: HttpClient) { }

  getResults(): Observable<IArtist[]> {
     return this.http.get<IArtist[]>(this._url);
  }
}
