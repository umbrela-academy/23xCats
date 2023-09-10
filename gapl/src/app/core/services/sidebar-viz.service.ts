import { Store } from '@ngrx/store';
import { BreakpointsService } from './breakpoints.service';
import { Injectable } from '@angular/core';
import { collapseSidebar, expandSidebar, hideSidebar } from '../layout/store/layout.actions';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarVizService {

  readonly collapser: () => void = () => this.sizeAwareCollapser();
  readonly expander: () => void = () => this.store.dispatch(expandSidebar());

  constructor(private store: Store, private breakpoints: BreakpointsService) { }

  sizeAwareCollapser() {
    this.breakpoints.smallPortrait$().pipe(
      take(1)
    ).subscribe(isSmPortrait => {
      this.store.dispatch(isSmPortrait ? hideSidebar() : collapseSidebar());
    });
  }

}
