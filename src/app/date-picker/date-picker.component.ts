import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class DatePickerComponent implements OnInit {

  constructor() { }

  @Output() datesMinMax = new EventEmitter<String[]>();

  get today() {
    return new Date();
  }

  convertDate(date) {
    const mm = date.getMonth() + 1; // getMonth() is zero-based
    const dd = date.getDate();

    return [date.getFullYear(),
            (mm > 9 ? '' : '0') + mm,
            (dd > 9 ? '' : '0') + dd
           ].join('-');
  }

  onSubmit(dateMin, dateMax) {
    this.datesMinMax.emit([this.convertDate(dateMin), this.convertDate(dateMax)]);
  }

  onClearingFilters() {
    this.datesMinMax.emit(['', '']);
  }

  ngOnInit() {

  }
}




