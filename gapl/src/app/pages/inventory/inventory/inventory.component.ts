import { Component, ViewChild } from '@angular/core';
import { faCopy, faPlusCircle, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, RowSelectedEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { localeDateFormat } from '../../../core/utils/date';
import { InventoryUpdate } from '../model/inventory.model';
import { InventoryApiService } from './../services/inventory-api.service';
import { InventoryEditorService } from './../services/inventory-editor.service';

@Component({
  selector: 'gapl-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent {

  readonly columnDefs: ColDef[] = [
    { field: "id", headerName: "ID", headerTooltip: "Unique ID for the given equipment", flex: 1.8, sort: 'desc' },
    { field: "name", flex: 2.5 },
    { field: "code", flex: 2, },
    { field: "currentAmount", flex: 2 },
    { field: "neededAmount", flex: 2 },
    { field: "cost", flex: 2 },
    { field: "lastPurchase", valueFormatter: localeDateFormat, headerTooltip: "Date when last purchase was made", filter: "date", flex: 3 },
  ];


  selectedOrRowId: false | number = false;

  faClone = faCopy;
  faPlus = faPlusCircle;
  faTrash = faTrash;
  faSearch = faSearch;


  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  public rowData$!: Observable<InventoryUpdate[]>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(
    protected editorService: InventoryEditorService,
    private apiService: InventoryApiService
  ) { }

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.apiService.getPaged();
  }

  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  onRowSelected(event: RowSelectedEvent) {
    this.selectedOrRowId = event.node.isSelected() ? event.node.data.id : false;
  }

  deleteRowSelected() {
    if (this.selectedOrRowId === false) return;
    //TODO delete row
    this.selectedOrRowId = false;
    this.agGrid.api.deselectAll();
  }

  showEditor(show: boolean) {
    this.editorService.showEditor(show);
  }
}
