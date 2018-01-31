import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PasswordPolicyManagementComponent} from './password-policy-management.component';

const routes: Routes = [
  {path: '', component: PasswordPolicyManagementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordPolicyManagementRoutingModule {}
