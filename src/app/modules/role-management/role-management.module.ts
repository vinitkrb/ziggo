import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleManagementRoutingModule } from './role-management-routing.module';
import { RoleManagementComponent } from './role-management.component';

@NgModule({
  imports: [
    CommonModule,
    RoleManagementRoutingModule
  ],
  declarations: [RoleManagementComponent]
})
export class RoleManagementModule { }
