import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientIdPhotoComponent } from './patient-id-photo.component';

describe('PatientIdPhotoComponent', () => {
  let component: PatientIdPhotoComponent;
  let fixture: ComponentFixture<PatientIdPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientIdPhotoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientIdPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
