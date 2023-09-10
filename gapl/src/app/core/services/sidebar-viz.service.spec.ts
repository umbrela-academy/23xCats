import { TestBed } from '@angular/core/testing';

import { SidebarVizService } from './sidebar-viz.service';

describe('SidebarVizService', () => {
  let service: SidebarVizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarVizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
