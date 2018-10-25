import { Component, OnInit, Input } from '@angular/core';
import { SearchByArtistService } from '../search-by-artist.service';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../Artist';
import { Concert } from '../Concert';

@Component({
  selector: 'app-concert-list',
  templateUrl: './concert-list.component.html',
  styleUrls: ['./concert-list.component.css']
})
export class ConcertListComponent implements OnInit {

  @Input() concerts: Concert[];

  artist: Artist;
  page: number = 1;

  constructor(
    private _searchbyArtistService: SearchByArtistService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(() => {
        this.artist = this._searchbyArtistService.getChosenArtist();

        this._searchbyArtistService.getArtistConcerts(this.artist.id)
          .subscribe((reponse: any) => {
            this.concerts = [];
            let concertTable = reponse.resultsPage.results.event;
            for (let concert of concertTable) {
              let aConcert = new Concert(
                concert.displayName,
                concert.performance[0].displayName,
                concert.venue.displayName,
                concert.id,
                concert.uri,
                concert.location.city,
                concert.location.lat,
                concert.location.lng,
                concert.start.datetime
              );
              this.concerts.push(aConcert);
            }
        });
      });
    }

  onPageChange(page: number) {
    this.page = page;
  }
}
