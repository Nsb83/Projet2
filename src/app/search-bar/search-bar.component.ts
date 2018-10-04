import { Component, OnInit } from '@angular/core';
import { SearchInputService } from '../search-input.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(
    public _searchInputService: SearchInputService,
    private router: Router
    ) { }

  onSearch(value) {
    this._searchInputService.searchInput=value;
    this.router.navigateByUrl('/results');
  }

  ngOnInit() {
  }

}
