import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserAuthGuard} from './shared/guard/user-auth.guard';
import {HttpClientInterceptorService} from './shared/services/http-client-interceptor.service';
import {RestClientService} from './shared/services/rest-client.service';
import {EventBroadcasterService} from './shared/services/event-broadcaster.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptorService,
      multi: true,
    },
    EventBroadcasterService,
    RestClientService,
    UserAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
