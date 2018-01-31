import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionManagementRoutingModule } from './permission-management-routing.module';
import { PermissionManagementComponent } from './permission-management.component';

@NgModule({
  imports: [
    CommonModule,
    PermissionManagementRoutingModule
  ],
  declarations: [PermissionManagementComponent]
})
export class PermissionManagementModule { }
