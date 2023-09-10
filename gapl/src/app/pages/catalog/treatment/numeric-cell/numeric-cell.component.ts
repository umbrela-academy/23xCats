import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { ICellEditorParams } from 'ag-grid-community';

@Component({
  selector: 'gapl-numeric-cell',
  templateUrl: './numeric-cell.component.html',
  styleUrls: ['./numeric-cell.component.scss'],
})
export class NumericCellComponent implements ICellEditorAngularComp, AfterViewInit {

  @ViewChild('input', { read: ViewContainerRef })
  public input!: ViewContainerRef;

  value!: number;

  agInit(params: ICellEditorParams) {
    console.log("num cell editor params", params);
    this.value = params.value;
  }

  ngAfterViewInit() {
    window.setTimeout(() => {
      this.input.element.nativeElement.focus();
    });
  }

  getValue() {
    return this.value;
  }

}
