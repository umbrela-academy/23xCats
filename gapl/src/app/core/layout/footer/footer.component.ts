import { BreakpointsService } from './../../services/breakpoints.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { globalRouteItems } from '../../models/global-routes.data';

@Component({
  standalone: true,
  selector: 'gapl-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  items!: MenuItem[];

  constructor(private breakpoints: BreakpointsService) { }

  ngOnInit() {
    this.items = globalRouteItems;
  }

}
