import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Artist } from "./Artist";
import { Venue } from "./Venue";

@Injectable({
  providedIn: "root"
})
export class SearchByArtistService {
  private _url: string;
  private _artistUrl: string;
  private _imgDescr: string;
  private _venueUrl: string;
  public chosenArtist: Artist;
  public chosenVenue: Venue;

  constructor(private http: HttpClient) {}

  setChosenArtist(chosenArtist) {
    this.chosenArtist = chosenArtist;
  }

  setChosenVenue(chosenVenue) {
    this.chosenVenue = chosenVenue;
  }

  getChosenArtist() {
    return this.chosenArtist;
  }

  getChosenVenue() {
    return this.chosenVenue;
  }

  getArtistConcerts(artistId) {
    this._artistUrl = `https://api.songkick.com/api/3.0/artists/${artistId}/calendar.json?apikey=R82Hox7PJZDJyV0G`;
    return this.http.get<any>(this._artistUrl);
  }

  getResults(userInput) {
    this._url = `https://api.songkick.com/api/3.0/search/artists.json?apikey=R82Hox7PJZDJyV0G&query=${userInput}`;
    return this.http.get<any>(this._url);
  }

  getImgDescr(artistName) {
    this._imgDescr = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&autocorrect=1&api_key=9b7579d5f409106928353935ac0ab5ab&format=json`;
    return this.http.get<any>(this._imgDescr);
  }

  getVenues(venueName) {
    return this.http.get<any>(
      `https://api.songkick.com/api/3.0/search/venues.json?query=${venueName}&apikey=R82Hox7PJZDJyV0G`
    );
  }

   getVenueConcerts(venueId) {
     this._venueUrl = `https://api.songkick.com/api/3.0/venues/${venueId}/calendar.json?apikey=R82Hox7PJZDJyV0G`
     return this.http.get<any>(this._venueUrl);
   }
}
