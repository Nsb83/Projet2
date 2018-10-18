import { Component, OnInit } from "@angular/core";
import { SearchByArtistService } from "../search-by-artist.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Artist } from "../Artist";
import { Venue } from "../Venue";

@Component({
  selector: "app-results-list",
  templateUrl: "./results-list.component.html",
  styleUrls: ["./results-list.component.css"]
})
export class ResultsListComponent implements OnInit {
  venue: Venue = {
    name: "",
    city: "",
    country: "",
    street: "",
    uri: ""
  };

  artist: Artist;
  p: number = 1;
  constructor(
    private _searchbyArtistService: SearchByArtistService,
    private route: ActivatedRoute
  ) {}

  public userInput: string;
  public artists: Artist[];
  public venues : Venue[];  

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.userInput = params["value"];


      this._searchbyArtistService.getVenues(this.userInput).subscribe((reponse : any) => {
        this.venues = []
        let venuess = reponse.resultPage.results.venues;
        for (let venue of venuess){
          aVenue = new Venue{
            venue.displayName,
            venue.city
          }
        }
      }





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
    });
  }
  onPageChange(page: number) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => (this.p = page), 200);
  }
  onChoosing(chosenArtist) {
    this._searchbyArtistService.setChosenArtist(chosenArtist);
  }
}

// https://api.songkick.com/api/3.0/artists/mbid:a523bd85-01ad-4815-aaac-2b95c1946088/calendar.json?apikey=R82Hox7PJZDJyV0G
// https://api.songkick.com/api/3.0/search/artists.json?apikey=R82Hox7PJZDJyV0G&query=oldelaf
