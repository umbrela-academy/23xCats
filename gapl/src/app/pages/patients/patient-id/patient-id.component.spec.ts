import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientIdComponent } from './patient-id.component';

describe('PatientIdComponent', () => {
  let component: PatientIdComponent;
  let fixture: ComponentFixture<PatientIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientIdComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
