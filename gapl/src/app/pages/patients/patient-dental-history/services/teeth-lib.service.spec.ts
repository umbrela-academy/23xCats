import { TestBed } from '@angular/core/testing';

import { TeethLibService } from './teeth-lib.service';

describe('TeethLibService', () => {
  let service: TeethLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeethLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
