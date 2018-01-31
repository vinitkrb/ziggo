import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordPolicyManagementRoutingModule } from './password-policy-management-routing.module';
import { PasswordPolicyManagementComponent } from './password-policy-management.component';

@NgModule({
  imports: [
    CommonModule,
    PasswordPolicyManagementRoutingModule
  ],
  declarations: [PasswordPolicyManagementComponent]
})
export class PasswordPolicyManagementModule { }
