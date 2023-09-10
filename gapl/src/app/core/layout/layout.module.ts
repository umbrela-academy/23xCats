import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterBasicComponent, HeaderBasicComponent, HeaderMenuTypeDirective, SidebarBasicComponent } from '@cosys/ui';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { RxLet } from '@rx-angular/template/let';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { layoutReducer } from './store/layout.reducer';

const COMPS = [HeaderComponent, FooterComponent, SidebarComponent];

@NgModule({
  declarations: [...COMPS],
  imports: [
    CommonModule,
    SidebarBasicComponent,
    HeaderBasicComponent,
    FooterBasicComponent,
    HeaderMenuTypeDirective,
    FontAwesomeModule,
    RxLet,
    MenubarModule,
    InputTextModule,
    StoreModule.forFeature('layout', layoutReducer),
  ],
  exports: [...COMPS],
})
export class LayoutModule {}
