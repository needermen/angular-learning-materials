import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  public checkUser(data) {
    return of({authToken: '328aldfsjfdksjh'})
  }

  public isAuthorized() {
    if(!this.userIsLoggedIn()) {
      this.router.navigate(['/auth']);
    }
  }

  public userIsLoggedIn(): boolean {
    const token = localStorage.getItem('authToken');
    return token ? true : false;
  }
}
