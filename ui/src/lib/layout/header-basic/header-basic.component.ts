import { Component, Input, ChangeDetectionStrategy, ContentChild, TemplateRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable, take } from 'rxjs';
import { HeaderMenuTypeDirective } from './header-menu-type.directive';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RxLet } from '@rx-angular/template/let';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RxLet
  ],
  selector: 'gita-header-basic',
  templateUrl: './header-basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderBasicComponent {

  @Input() isSidebarShown$!: Observable<boolean>;
  @Input() headerNavItems!: MenuItem[];

  @ContentChild(HeaderMenuTypeDirective, { read: TemplateRef })
  headers?: TemplateRef<any>;

  @Input() collapser!: () => void;
  @Input() expander!: () => void;

  @Input() prodPref = "OCT";
  @Input() authPref = "RK";


  toggleSidebar() {
    this.isSidebarShown$.pipe(take(1)).subscribe(
      shown => {
        shown ? this.collapser() : this.expander();
      }
    );
  }
}
