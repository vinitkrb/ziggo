import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventBroadcasterService } from '../../shared/services/event-broadcaster.service';
import { UserManagementComponent } from './user-management.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RestClientService } from '../../shared/services/rest-client.service';
import { UserManagementService } from './user-management.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('UserManagementComponent', () => {
  let component: UserManagementComponent;
  let fixture: ComponentFixture<UserManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Ng2SmartTableModule],
      declarations: [ UserManagementComponent ],
      providers: [ UserManagementService, EventBroadcasterService, RestClientService, HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
