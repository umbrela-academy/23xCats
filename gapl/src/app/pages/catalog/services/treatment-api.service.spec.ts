import { TestBed } from '@angular/core/testing';

import { TreatmentApiService } from './treatment-api.service';

describe('TreatmentApiService', () => {
  let service: TreatmentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreatmentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
