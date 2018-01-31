import { TestBed, inject } from '@angular/core/testing';

import { PasswordPolicyManagementService } from './password-policy-management.service';

describe('PasswordPolicyManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordPolicyManagementService]
    });
  });

  it('should be created', inject([PasswordPolicyManagementService], (service: PasswordPolicyManagementService) => {
    expect(service).toBeTruthy();
  }));
});
