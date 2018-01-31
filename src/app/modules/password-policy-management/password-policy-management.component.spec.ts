import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordPolicyManagementComponent } from './password-policy-management.component';

describe('PasswordPolicyManagementComponent', () => {
  let component: PasswordPolicyManagementComponent;
  let fixture: ComponentFixture<PasswordPolicyManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordPolicyManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordPolicyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
