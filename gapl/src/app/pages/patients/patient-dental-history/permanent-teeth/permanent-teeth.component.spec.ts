import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentTeethComponent } from './permanent-teeth.component';

describe('PermanentTeethComponent', () => {
  let component: PermanentTeethComponent;
  let fixture: ComponentFixture<PermanentTeethComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermanentTeethComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PermanentTeethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
