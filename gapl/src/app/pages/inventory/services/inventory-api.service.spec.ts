import { TestBed } from '@angular/core/testing';

import { InventoryApiService } from './inventory-api.service';

describe('InventoryApiService', () => {
  let service: InventoryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
