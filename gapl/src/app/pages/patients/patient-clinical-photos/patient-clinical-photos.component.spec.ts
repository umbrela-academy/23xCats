import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientClinicalPhotosComponent } from './patient-clinical-photos.component';

describe('PatientClinicalPhotosComponent', () => {
  let component: PatientClinicalPhotosComponent;
  let fixture: ComponentFixture<PatientClinicalPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientClinicalPhotosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientClinicalPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
