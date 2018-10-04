import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchByArtistService {

  constructor(private http: HttpClient) { }

  getResults() {
    return this.http.get('../assets/fakeResults/results.json');
  }
}
