import { Injectable } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Injectable({
  providedIn: 'root'
})
export class TreatmentsGridApiService {

  private _agGrid!: AgGridAngular;

  constructor() { }

  init(agGrid: AgGridAngular) {
    this._agGrid = agGrid;
  }

  get api() {
    return this._agGrid.api;
  }
}
