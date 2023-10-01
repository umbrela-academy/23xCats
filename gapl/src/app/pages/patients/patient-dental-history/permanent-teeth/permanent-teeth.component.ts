import { Component } from '@angular/core';
import { TeethLibService } from './../services/teeth-lib.service';

@Component({
  selector: 'gapl-permanent-teeth',
  templateUrl: './permanent-teeth.component.html',
  styleUrls: ['./permanent-teeth.component.scss'],
})
export class PermanentTeethComponent {

  constructor(protected tl: TeethLibService) { }
}
