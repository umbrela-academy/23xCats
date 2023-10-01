import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryNewQuickComponent } from './inventory-new-quick.component';

describe('InventoryNewQuickComponent', () => {
  let component: InventoryNewQuickComponent;
  let fixture: ComponentFixture<InventoryNewQuickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryNewQuickComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InventoryNewQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
