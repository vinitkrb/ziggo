import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: './landing-page/landing-page.module#LandingPageModule'
      },
      {
        path: 'organization-management',
        loadChildren: './organization-management/organization-management.module#OrganizationManagementModule'
      },
      {
        path: 'role-management',
        loadChildren: './role-management/role-management.module#RoleManagementModule'
      },
      {
        path: 'application-management',
        loadChildren: './application-management/application-management.module#ApplicationManagementModule'
      },
      {
        path: 'permission-management',
        loadChildren: './permission-management/permission-management.module#PermissionManagementModule'
      },
      {
        path: 'user-management',
        loadChildren: './user-management/user-management.module#UserManagementModule'
      },
      {
        path: 'password-policy-management',
        loadChildren: './password-policy-management/password-policy-management.module#PasswordPolicyManagementModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
