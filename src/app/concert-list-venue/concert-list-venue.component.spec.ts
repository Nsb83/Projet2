import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertListVenueComponent } from './concert-list-venue.component';

describe('ConcertListVenueComponent', () => {
  let component: ConcertListVenueComponent;
  let fixture: ComponentFixture<ConcertListVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertListVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertListVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
