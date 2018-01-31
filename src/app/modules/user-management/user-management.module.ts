import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Ng2SmartTableModule} from 'ng2-smart-table';

import {UserManagementRoutingModule} from './user-management-routing.module';
import {UserManagementComponent} from './user-management.component';
import {UserManagementService} from './user-management.service';

@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [
    UserManagementComponent
  ],
  providers: [
    UserManagementService
  ]
})
export class UserManagementModule {
}
