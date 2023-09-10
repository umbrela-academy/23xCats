import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeciduousTeethComponent } from './deciduous-teeth.component';

describe('DeciduousTeethComponent', () => {
  let component: DeciduousTeethComponent;
  let fixture: ComponentFixture<DeciduousTeethComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeciduousTeethComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeciduousTeethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
