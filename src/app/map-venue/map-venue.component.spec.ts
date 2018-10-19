import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapVenueComponent } from './map-venue.component';

describe('MapVenueComponent', () => {
  let component: MapVenueComponent;
  let fixture: ComponentFixture<MapVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
