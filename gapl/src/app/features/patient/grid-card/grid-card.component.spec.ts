import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCardComponent } from './grid-card.component';

describe('GridCardComponent', () => {
  let component: GridCardComponent;
  let fixture: ComponentFixture<GridCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
