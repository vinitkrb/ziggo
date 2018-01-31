import { TestBed, inject } from '@angular/core/testing';

import { OrganizationManagementService } from './organization-management.service';

describe('OrganizationManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationManagementService]
    });
  });

  it('should be created', inject([OrganizationManagementService], (service: OrganizationManagementService) => {
    expect(service).toBeTruthy();
  }));
});
