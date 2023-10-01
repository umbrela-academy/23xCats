import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentNewQuickComponent } from './treatment-new-quick.component';

describe('TreatmentNewQuickComponent', () => {
  let component: TreatmentNewQuickComponent;
  let fixture: ComponentFixture<TreatmentNewQuickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreatmentNewQuickComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TreatmentNewQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
