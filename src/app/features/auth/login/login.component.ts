import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public authForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.authForm = this.fb.group({
      'email': ['test@test.com', [Validators.required, Validators.email]],
      'password': ['123', Validators.required]
    });
  }

  onSubmit() {
    if(this.authForm.valid) {
      console.log(this.authForm.value);
      this.authService.checkUser(this.authForm.value).subscribe(data => {
        localStorage.setItem('authToken', data.authToken);
        this.route.navigate([''])
      })
    }
  }

}
