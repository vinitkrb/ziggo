import {TestBed, inject} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {HttpClientInterceptorService} from './http-client-interceptor.service';

describe('HttpClientInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        HttpClientInterceptorService
      ]
    });
  });

  it('should be created', inject([HttpClientInterceptorService], (service: HttpClientInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
