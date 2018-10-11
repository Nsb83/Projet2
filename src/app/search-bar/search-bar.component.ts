import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchByArtistService } from "../search-by-artist.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(
    public _searchByArtistService: SearchByArtistService,
    private router: Router
    ) { }

  onSearch(value) {
    this.router.navigate(['/results', value]);
  }

  ngOnInit() {

  }

}
