import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { treatmentListActions } from '../../store/treatment-list/treatment-list.actions';
import { TreatmentEntity } from './../../model/treatment.model';
import { TreatmentsGridApiService } from './../../services/treatments-grid-api.service';
import { treatmentEditSelectors } from './../../store/treatment-list/treatment-list.selectors';
import { treatmentActions } from './../../store/treatment/treatment.actions';

@Component({
  selector: 'gapl-action-cell',
  templateUrl: './action-cell.component.html',
  styleUrls: ['./action-cell.component.scss'],
})
export class ActionCellComponent implements ICellRendererAngularComp {

  rowData?: TreatmentEntity;
  idSelected$?: Observable<number>;
  edited$?: Observable<boolean>;
  isUnsaved$?: Observable<boolean>;

  constructor(
    private store: Store,
    private gridApi: TreatmentsGridApiService
  ) { }

  agInit(params: ICellRendererParams<TreatmentEntity, any>): void {
    this.rowData = params.data;
    this.idSelected$ = this.store.select(treatmentEditSelectors.selectSelectedId);
    this.edited$ = this.store.select(treatmentEditSelectors.selectInlineTrigger);
    this.isUnsaved$ = this.store.select(treatmentEditSelectors.selectNeedsUpdate(this.rowData?.id));
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  saveEdit() {
    this.gridApi.api.stopEditing();
    if (this.rowData) {
      this.store.dispatch(treatmentActions.updateTreatmentInLine({ treatment: this.rowData }))
    }
    this.gridApi.api.stopEditing(true);
  }

  openEditModal() {
    this.store.dispatch(treatmentActions.displayModalForm({ id: this.rowData?.id ?? -1 }));
  }

  cancelEdit() {
    this.gridApi.api.stopEditing(true);
    if (this.rowData) {
      this.store.dispatch(treatmentListActions.undoById({ id: this.rowData.id }));
    }
  }

  openDeleteModal() {
    //TODO: add delete modal for confirmation
    throw new Error('Method not implemented.');
  }

}
