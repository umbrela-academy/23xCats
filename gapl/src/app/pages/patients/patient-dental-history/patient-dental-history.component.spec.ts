import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDentalHistoryComponent } from './patient-dental-history.component';

describe('PatientDentalHistoryComponent', () => {
  let component: PatientDentalHistoryComponent;
  let fixture: ComponentFixture<PatientDentalHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientDentalHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientDentalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
