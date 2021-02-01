import { TestBed } from '@angular/core/testing';

import { UserIsloggedGuard } from './user-is-logged.guard';

describe('UserIsloggedGuard', () => {
  let guard: UserIsloggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserIsloggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
