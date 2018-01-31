import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {GlobalHeaderComponent} from '../shared/components/global-header/global-header.component';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule.forRoot(),
    NgbModule.forRoot(),
    LayoutRoutingModule
  ],
  providers: [
  ],
  declarations: [
    LayoutComponent,
    GlobalHeaderComponent
  ]
})
export class LayoutModule {}
