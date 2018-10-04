import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SearchInputService {

  searchInput: string;

  constructor() { }

  getSearchInput() {
    return this.searchInput;
  }
}
