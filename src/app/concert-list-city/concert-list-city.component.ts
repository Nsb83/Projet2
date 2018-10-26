import { Component, OnInit, Input } from '@angular/core';
import { Concert } from '../Concert';

@Component({
  selector: 'app-concert-list-city',
  templateUrl: './concert-list-city.component.html',
  styleUrls: ['./concert-list-city.component.css']
})
export class ConcertListCityComponent implements OnInit {

  @Input() concerts: Concert [];

  page: number = 1;

  constructor(
    ) { }

  ngOnInit() {
  }

  onPageChange(page: number) {
    this.page = page;
  }
}
