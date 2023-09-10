import { Injectable } from '@angular/core';

import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointsService {

  constructor(private breakpointObserver: BreakpointObserver) { }

  smallPortrait$(): Observable<boolean> {
    return this.breakpointObserver.observe(
      [
        Breakpoints.Small,
        Breakpoints.HandsetPortrait
      ]
    ).pipe(
      map((state: BreakpointState) => state.matches)
    )
  }
}
