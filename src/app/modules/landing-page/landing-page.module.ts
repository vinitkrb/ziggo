import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LandingPageRoutingModule} from './landing-page-routing.module';
import {LandingPageComponent} from './landing-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LandingPageRoutingModule
  ],
  declarations: [LandingPageComponent]
})
export class LandingPageModule {
}
