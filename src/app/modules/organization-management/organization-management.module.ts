import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationManagementRoutingModule } from './organization-management-routing.module';
import { OrganizationManagementComponent } from './organization-management.component';

@NgModule({
  imports: [
    CommonModule,
    OrganizationManagementRoutingModule
  ],
  declarations: [OrganizationManagementComponent]
})
export class OrganizationManagementModule { }
