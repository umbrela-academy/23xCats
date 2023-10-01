import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalComponent } from './formal.component';

describe('FormalComponent', () => {
  let component: FormalComponent;
  let fixture: ComponentFixture<FormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
