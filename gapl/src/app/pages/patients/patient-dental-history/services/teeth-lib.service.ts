import { conditionToColor, EMPTY_TEETH_HISTORY, ToothHistory } from './../../../../core/models/teeth.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeethLibService {

  teethHistory: ToothHistory[] = EMPTY_TEETH_HISTORY;

  currentPermanentTooth = 0;
  currentDeciduousTooth = 0;

  shouldBeStroked(index: number) {
    if (index > this.teethHistory.length) return false;
    return this.teethHistory[index] && this.teethHistory[index].notes.length;
  }

  conditionToColor(toothHistory?: ToothHistory) {
    if (!toothHistory) return;
    if ([this.currentPermanentTooth, this.currentDeciduousTooth]
      .includes(toothHistory.iso)) {
      return "#71bbd4";
    }
    return conditionToColor(toothHistory.condition);
  }

  getByIso(index: number) {
    return this.teethHistory.find(t => t.iso === index)
  }

  selectedToothIso(index: number) {
    if (index <= 48) {
      this.currentPermanentTooth = this.currentPermanentTooth !== index ? index : 0;
    } else {
      this.currentDeciduousTooth = this.currentDeciduousTooth !== index ? index : 0;
    }
  }
}
