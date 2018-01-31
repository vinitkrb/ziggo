import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {GlobalHeaderComponent} from '../shared/components/global-header/global-header.component';
import {LayoutComponent} from './layout.component';

import {HttpClient, HttpHandler} from '@angular/common/http';
import {RestClientService} from '../shared/services/rest-client.service';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbDropdownModule.forRoot(),
        NgbModule.forRoot()
      ],
      declarations: [
        LayoutComponent,
        GlobalHeaderComponent
      ],
      providers: [HttpClient, HttpHandler, RestClientService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
