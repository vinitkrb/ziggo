import {TestBed, inject} from '@angular/core/testing';

import {HttpClient, HttpHandler} from '@angular/common/http';
import {ApplicationManagementService} from './application-management.service';
import {RestClientService} from '../../shared/services/rest-client.service';

describe('ApplicationManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        RestClientService,
        ApplicationManagementService
      ],
    });
  });

  it('should be created', inject([ApplicationManagementService], (service: ApplicationManagementService) => {
    expect(service).toBeTruthy();
  }));
});
