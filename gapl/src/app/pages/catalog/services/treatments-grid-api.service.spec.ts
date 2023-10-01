import { TestBed } from '@angular/core/testing';

import { TreatmentsGridApiService } from './treatments-grid-api.service';

describe('TreatmentsGridApiService', () => {
  let service: TreatmentsGridApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreatmentsGridApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
