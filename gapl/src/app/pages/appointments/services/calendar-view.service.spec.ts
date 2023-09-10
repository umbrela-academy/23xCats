import { TestBed } from '@angular/core/testing';

import { CalendarViewService } from './calendar-view.service';

describe('CalendarViewService', () => {
  let service: CalendarViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
