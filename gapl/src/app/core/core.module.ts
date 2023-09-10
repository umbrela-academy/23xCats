import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { ApiService } from './api/api.service';
import { LayoutModule } from './layout/layout.module';

const MODS = [
    LayoutModule
];


@NgModule({
    imports: [
        CommonModule,
        ...MODS
    ],
    exports: [
        ...MODS,
    ],
    providers: [ApiService]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the PagesModule only.');
        }
    }
}