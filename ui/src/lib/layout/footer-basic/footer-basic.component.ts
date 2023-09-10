import { CommonModule,  } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    TooltipModule
  ],
  selector: 'gita-footer-basic',
  templateUrl: './footer-basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterBasicComponent {
  @Input() icons!: MenuItem[];

  protected year = new Date().getFullYear();
}
