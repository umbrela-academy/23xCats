import { Component, OnInit, ViewChild } from '@angular/core';
import { faPlusCircle, faSave, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, CellEditingStartedEvent, CellEditingStoppedEvent, CellEditRequestEvent, ColDef, GridReadyEvent, RowSelectedEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { TreatmentsGridApiService } from '../services/treatments-grid-api.service';
import { GridHelperService } from './../../../core/grid/grid-helper.service';
import { TreatmentEntity } from './../model/treatment.model';
import { treatmentListActions } from './../store/treatment-list/treatment-list.actions';
import { treatmentEditSelectors, treatmentListSelectors } from './../store/treatment-list/treatment-list.selectors';
import { treatmentActions } from './../store/treatment/treatment.actions';
import { ActionCellComponent } from './action-cell/action-cell.component';
import { NumericCellComponent } from './numeric-cell/numeric-cell.component';

const invalid = "Invalid Number";

@Component({
  selector: 'gapl-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss'],
})
export class TreatmentComponent implements OnInit {

  columnDefs: ColDef[] = [
    {
      field: "id",
      headerName: "ID",
      headerTooltip: "Unique ID for the given equipment",
      flex: 1.8,
      editable: false,
      suppressNavigable: true,
      sort: 'asc'
    },
    { field: "commonName", headerName: "Name", flex: 2, editable: true },
    { field: "treatmentType", headerName: "Type", flex: 2, editable: true },
    {
      field: "expense",
      headerName: "Price",
      flex: 1.5,
      editable: true,
      cellEditor: NumericCellComponent,
      valueParser: params => {
        const newNum = Number(params.newValue);
        return isNaN(newNum) || newNum < 0 ? invalid : newNum;
      },
      cellClassRules: {
        'border-red-600': params => params.value === invalid
      },
    },
    {
      field: "visits",
      headerName: "Min Visits",
      flex: 1.5,
      editable: true,
      cellEditor: NumericCellComponent,
      valueParser: params => {
        const newNum = Number(params.newValue);
        return isNaN(newNum) || newNum < 0 ? invalid : newNum;
      },
      cellClassRules: {
        'border-red-600': params => params.value === invalid
      },
    },
    {
      headerName: "Actions",
      flex: 1,
      cellRenderer: ActionCellComponent,
      editable: false
    }
  ];

  selectedId = -1;

  faSave = faSave;
  faPlus = faPlusCircle;
  faTrash = faTrash;
  faSearch = faSearch;

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };


  protected rowData$!: Observable<TreatmentEntity[]>;
  protected displayModal$!: Observable<boolean>;
  protected hasUnsaved$!: Observable<boolean>;

  protected entityName = "treatments";


  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(
    private store: Store,
    protected tableProps: GridHelperService,
    private gridApi: TreatmentsGridApiService) { }

  ngOnInit() {
    this.store.dispatch(treatmentListActions.loadTreatments());
    this.displayModal$ = this.store.select(treatmentEditSelectors.selectModalTrigger);
    this.hasUnsaved$ = this.store.select(treatmentEditSelectors.selectHasUnsaved);
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi.init(this.agGrid);
    this.rowData$ = this.store.select(treatmentListSelectors.selectTreatmentEntities);
  }


  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }


  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  onRowSelected(event: RowSelectedEvent) {
    if (event.node.isSelected()) {
      const id = event.node.data.id;
      this.store.dispatch(treatmentActions.selectTreatment({ id }));
    }
  }

  deleteRowSelected() {
    if (this.selectedId === -1) return;
    //TODO: delete row
    this.selectedId = -1;
    this.agGrid.api.deselectAll();
  }

  inlineEditStarted(event: CellEditingStartedEvent) {
    if (event.rowIndex) {
      this.agGrid.api.getRowNode('' + event.rowIndex)?.setSelected(true);
    }
  }

  cellEditRequest(event: CellEditRequestEvent) {
    this.store.dispatch(treatmentActions.displayInlineForm());
    const data = event.data;
    const field = event.colDef.field;
    const newItem = { ...data };
    if (field) {
      newItem[field] = event.newValue;
      this.store.dispatch(treatmentListActions.changeById({ newItem }))
    }
  }

  inlineEditStopped(event: CellEditingStoppedEvent) {
    this.store.dispatch(treatmentActions.hideInlineForm());
  }

  showEditor(show: boolean) {
    if (show) {
      this.store.dispatch(treatmentActions.displayModalForm({ id: -1 }));
    }
  }

  resolveUpdates() {
    // TODO: save all changes using array of unsaved treatment entities
    console.log("batch updating unsaved changes");
  }
}
