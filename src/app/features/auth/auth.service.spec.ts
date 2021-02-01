import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { routes } from '../../app-routing.module';
import { Router } from '@angular/router';
import { of } from 'rxjs';

fdescribe('AuthService', () => {
  let service: any;
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: {checkUser: () => of({authToken: '12312321'})} }
      ],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ]
    });
    service = TestBed.inject(AuthService);
    location = TestBed.inject(Location);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return object', () => {
    // const spy = spyOn(service, 'checkUser').and.returnValue(of({}));

    service.checkUser('test').subscribe((obj) => {
      expect(obj).toEqual({authToken: '12312321'});
    });

    // expect(spy).toHaveBeenCalled();
  });

  // it('should navigate to auth when user isn\'t logged in', fakeAsync(() => {
  //   service.isAuthorized();
  //   tick(1);

  //   expect(location.path()).toEqual('/auth');
  // }));

  // it('should call router navigate method', fakeAsync(() => {
  //   const spy = spyOn(router, 'navigate');

  //   service.isAuthorized();

  //   expect(spy).toHaveBeenCalled();
  // }));

});
