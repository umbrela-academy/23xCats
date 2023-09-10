import { TestBed } from '@angular/core/testing';

import { InventoryEditorService } from './inventory-editor.service';

describe('InventoryEditorService', () => {
  let service: InventoryEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
