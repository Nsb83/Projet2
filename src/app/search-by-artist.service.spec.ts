import { TestBed } from '@angular/core/testing';

import { SearchByArtistService } from './search-by-artist.service';

describe('SearchByArtistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchByArtistService = TestBed.get(SearchByArtistService);
    expect(service).toBeTruthy();
  });
});
