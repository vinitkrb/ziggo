import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ApplicationManagementComponent} from './application-management.component';

const routes: Routes = [
  {path: '', component: ApplicationManagementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationManagementRoutingModule {}
