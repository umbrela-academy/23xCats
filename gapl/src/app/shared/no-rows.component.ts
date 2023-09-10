import { INoRowsOverlayAngularComp } from "ag-grid-angular";
import { INoRowsOverlayParams } from "ag-grid-community";
import { Component } from "@angular/core";

@Component({
  selector: 'gita-no-rows-overlay',
  template: `
     <div class="ag-overlay-loading-center bg-accent">
        {{ params.noRowsMessageFunc() }}
     </div>`
})
export class CustomNoRowsOverlayComponent implements INoRowsOverlayAngularComp {
  public params!: INoRowsOverlayParams & { noRowsMessageFunc: () => string };

  agInit(params: INoRowsOverlayParams & { noRowsMessageFunc: () => string }): void {
    this.params = params;
  }
}
