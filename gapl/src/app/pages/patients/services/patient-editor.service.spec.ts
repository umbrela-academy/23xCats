import { TestBed } from '@angular/core/testing';

import { PatientEditorService } from './patient-editor.service';

describe('PatientEditorService', () => {
  let service: PatientEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
