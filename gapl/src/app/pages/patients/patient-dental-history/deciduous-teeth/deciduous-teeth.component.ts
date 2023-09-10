import { Component } from '@angular/core';
import { TeethLibService } from '../services/teeth-lib.service';

@Component({
  selector: 'gapl-deciduous-teeth',
  templateUrl: './deciduous-teeth.component.html',
  styleUrls: ['./deciduous-teeth.component.scss'],
})
export class DeciduousTeethComponent {

  constructor(protected tl: TeethLibService) { }
}
