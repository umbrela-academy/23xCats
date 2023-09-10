import { Injectable } from '@angular/core';
import { CustomLoadingOverlayComponent } from '../../shared/loading-rows.component';
import { CustomNoRowsOverlayComponent } from '../../shared/no-rows.component';

@Injectable({
  providedIn: 'root'
})
export class GridHelperService {

  loadingOverlayComponent = CustomLoadingOverlayComponent;
  noRowsOverlayComponent = CustomNoRowsOverlayComponent;

  loadingOverlayComponentParams = (entity: string) => ({
    loadingMessage: `Loading all ${entity}...`,
  });

  noRowsOverlayComponentParams = (entity: string) => ({
    noRowsMessageFunc: () => `All ${entity} will appear here.`
  });
}
