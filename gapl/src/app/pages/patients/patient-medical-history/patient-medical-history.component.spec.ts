import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMedicalHistoryComponent } from './patient-medical-history.component';

describe('PatientMedicalHistoryComponent', () => {
  let component: PatientMedicalHistoryComponent;
  let fixture: ComponentFixture<PatientMedicalHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientMedicalHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientMedicalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
