import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientNewQuickComponent } from './patient-new-quick.component';

describe('PatientNewQuickComponent', () => {
  let component: PatientNewQuickComponent;
  let fixture: ComponentFixture<PatientNewQuickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientNewQuickComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientNewQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
