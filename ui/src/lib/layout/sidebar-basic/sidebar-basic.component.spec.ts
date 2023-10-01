import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBasicComponent } from './sidebar-basic.component';

describe('SidebarBasicComponent', () => {
  let component: SidebarBasicComponent;
  let fixture: ComponentFixture<SidebarBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
