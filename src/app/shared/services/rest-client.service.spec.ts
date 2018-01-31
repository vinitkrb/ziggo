import {TestBed, inject} from '@angular/core/testing';

import {HttpClient, HttpHandler} from '@angular/common/http';
import {RestClientService} from './rest-client.service';

describe('RestClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        RestClientService
      ]
    });
  });

  it('should be created', inject([RestClientService], (service: RestClientService) => {
    expect(service).toBeTruthy();
  }));
});
