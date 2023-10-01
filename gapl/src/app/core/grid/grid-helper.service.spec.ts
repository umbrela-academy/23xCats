import { TestBed } from '@angular/core/testing';

import { GridHelperService } from './grid-helper.service';

describe('GridHelperService', () => {
  let service: GridHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
