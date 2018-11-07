import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {


  date;
  date2;

  constructor() { }


  ngOnInit() {
    // this.date2 = this.date.year + '-' + this.date.month + '-' + this.date.day;
  }

}
