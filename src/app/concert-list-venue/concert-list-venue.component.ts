import { Component, OnInit, Input } from '@angular/core';

import { Concert } from '../Concert';

@Component({
  selector: 'app-concert-list-venue',
  templateUrl: './concert-list-venue.component.html',
  styleUrls: ['./concert-list-venue.component.css']
})
export class ConcertListVenueComponent implements OnInit {

  @Input() concerts: Concert[];

  page: number = 1;

  constructor(

  ) { }

  ngOnInit() {

  }

  onPageChange(page: number) {
    this.page = page;
  }

}

