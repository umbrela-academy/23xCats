import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericCellComponent } from './numeric-cell.component';

describe('NumericCellComponent', () => {
  let component: NumericCellComponent;
  let fixture: ComponentFixture<NumericCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumericCellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NumericCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
