import { Component, OnInit } from "@angular/core";
import { SearchByArtistService } from "../search-by-artist.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { City } from "../City";
import { Artist } from "../Artist";
import { Venue } from "../Venue";

@Component({
  selector: "app-results-list",
  templateUrl: "./results-list.component.html",
  styleUrls: ["./results-list.component.css"]
})
export class ResultsListComponent implements OnInit {
  venue: Venue;
  artist: Artist;

  p: number = 1;

  constructor(
    private _searchbyArtistService: SearchByArtistService,
    private route: ActivatedRoute
  ) {}

  public artistDisplayName: string;
  public userInput: string;
  public artists: Artist[];
  public venues: Venue[];
  public cities: City[];
  public filterArtists: boolean = true;
  public filterVenues: boolean = true;
  public filterCities: boolean = true;

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.userInput = params["value"];

      this._searchbyArtistService
        .getResults(this.userInput)
        .subscribe((res: any) => {
          this.artists = [];
          let artistes = res.resultsPage.results.artist;
          for (let artist of artistes) {
            let unArtiste = new Artist(
              artist.displayName,
              artist.id,
              artist.onTourUntil,
              artist.uri
            );
            this._searchbyArtistService
              .getImgDescr(unArtiste.name)
              .subscribe((data: any) => {
                unArtiste.image = data.artist.image[3]["#text"];
                unArtiste.summary = data.artist.bio.summary;
                this.artists.push(unArtiste);
              });
          }
        });

      this._searchbyArtistService
        .getVenues(this.userInput)
        .subscribe((reponse: any) => {
          this.venues = [];
          let venuess = reponse.resultsPage.results.venue;
          for (let venue of venuess) {
            let aVenue = new Venue(
              venue.displayName,
              venue.city,
              venue.country,
              venue.street,
              venue.uri,
              venue.id,
              venue.lat,
              venue.lng,
              venue.website,
              venue.description
            );
            this.venues.push(aVenue);
          }
        });

      this._searchbyArtistService
        .getCities(this.userInput)
        .subscribe((obj: any) => {
          this.cities = [];
          let citiesTable = obj.resultsPage.results.location;
          for (let city of citiesTable) {
            let aCity = new City(
              city.metroArea.id,
              city.metroArea.uri,
              city.city.displayName,
              city.metroArea.country.displayName,
              city.metroArea.lat,
              city.metroArea.lng
            );
            this.cities.push(aCity);
          }
        });
    });
  }

  onPageChange(page: number) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => (this.p = page), 200);
  }

  onChoosingArtist(chosenArtist) {
    this._searchbyArtistService.setChosenArtist(chosenArtist);
  }

  onChoosingVenue(chosenVenue) {
    this._searchbyArtistService.setChosenVenue(chosenVenue);
  }

  showArtists() {
    this.filterArtists = true;
    this.filterVenues = false;
    this.filterCities = false;
  }

  showVenues() {
    this.filterVenues = true;
    this.filterArtists = false;
    this.filterCities = false;
  }

  showAll() {
    this.filterArtists = true;
    this.filterVenues = true;
    this.filterCities = true;
  }

  showCities() {
    this.filterArtists = false;
    this.filterVenues = false;
    this.filterCities = true;
  }
}

// https://api.songkick.com/api/3.0/artists/mbid:a523bd85-01ad-4815-aaac-2b95c1946088/calendar.json?apikey=R82Hox7PJZDJyV0G
// https://api.songkick.com/api/3.0/search/artists.json?apikey=R82Hox7PJZDJyV0G&query=oldelaf
