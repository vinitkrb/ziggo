import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationManagementRoutingModule } from './application-management-routing.module';
import { ApplicationManagementComponent } from './application-management.component';

@NgModule({
  imports: [
    CommonModule,
    ApplicationManagementRoutingModule
  ],
  declarations: [ApplicationManagementComponent]
})
export class ApplicationManagementModule { }
