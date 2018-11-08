import { Component, OnInit, Input } from '@angular/core';
import { Concert } from '../Concert';

@Component({
  selector: 'app-concert-list',
  templateUrl: './concert-list.component.html',
  styleUrls: ['./concert-list.component.css']
})
export class ConcertListComponent implements OnInit {

  @Input() concerts: Concert[];

  page = 1;

  constructor(
  ) { }

  ngOnInit() {

  }

  onPageChange(page: number) {
    window.scrollTo({ top: 700, behavior: 'smooth' });
    setTimeout(() => (this.page = page), 200);
  }
}
