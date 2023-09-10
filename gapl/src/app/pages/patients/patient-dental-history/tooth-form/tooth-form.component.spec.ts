import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToothFormComponent } from './tooth-form.component';

describe('ToothFormComponent', () => {
  let component: ToothFormComponent;
  let fixture: ComponentFixture<ToothFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToothFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToothFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
