import { TestBed } from '@angular/core/testing';

import { UserIsNotloggedGuard } from './user-is-not-logged.guard';

describe('UserIsNotloggedGuard', () => {
  let guard: UserIsNotloggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserIsNotloggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
