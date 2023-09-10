import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideCardComponent } from './wide-card.component';

describe('WideCardComponent', () => {
  let component: WideCardComponent;
  let fixture: ComponentFixture<WideCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WideCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
