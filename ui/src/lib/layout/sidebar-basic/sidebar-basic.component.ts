import { Observable, Subject, takeUntil, switchMap, interval, take, takeWhile, tap, noop } from 'rxjs';
import { Component, Input, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RxLet } from '@rx-angular/template/let';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, RxLet],
  selector: 'gita-sidebar-basic',
  templateUrl: './sidebar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarBasicComponent implements OnInit, OnDestroy {
  @Input() sidebarItems!: MenuItem[];

  @Input() isSidebarExpanded$!: Observable<boolean>;

  @Input() collapser!: () => void;

  @Input() expander!: () => void;

  @Input() logoPath!: string;

  @Input() autoCollapsing = true;

  @Input() bottom?: MenuItem;

  private onDestroy$ = new Subject<true>();
  private pausedExpansion = false;

  private autoCollapse() {
    this.isSidebarExpanded$
      .pipe(
        takeUntil(this.onDestroy$),
        takeWhile(() => this.autoCollapsing),
        switchMap((expanded) =>
          interval(5000).pipe(
            takeWhile(() => expanded) // TODO: story 1. leakage and subscriptions
          )
        ),
        tap(() => (!this.pausedExpansion ? this.onSidebarCollapse() : noop()))
      )
      .subscribe();
  }

  protected onSidebarCollapse() {
    this.pausedExpansion = false;
    this.collapser();
  }

  protected onSidebarExpand() {
    this.expander();
  }

  toggleSidebar() {
    this.isSidebarExpanded$.pipe(take(1)).subscribe((isSidebarExpanded) => {
      if (isSidebarExpanded) {
        this.collapser();
      } else {
        this.expander();
      }
    });
  }

  pauseExpansion() {
    this.pausedExpansion = true;
  }

  unpauseExpansion() {
    this.pausedExpansion = false;
  }

  ngOnInit(): void {
    this.autoCollapse();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
