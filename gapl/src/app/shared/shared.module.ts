import { NgModule } from '@angular/core';
import { CustomLoadingOverlayComponent } from './loading-rows.component';
import { CustomNoRowsOverlayComponent } from './no-rows.component';

const COMPS = [
    CustomLoadingOverlayComponent,
    CustomNoRowsOverlayComponent
]
@NgModule({
    declarations: [...COMPS],
    exports: [...COMPS]
})
export class SharedModule { }
