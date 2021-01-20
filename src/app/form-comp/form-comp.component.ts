import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.scss']
})
export class FormCompComponent implements OnInit {

  form: FormGroup | undefined;

  templateFrom = {
    email: '',
    password: ''
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'passwordGroup': this.fb.group({
        'password': ['', Validators.required],
        'confirmPassword': ['', Validators.required],
      }, {validators: this.confirmPasswordValidator}),
      'nickName': ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]]
    })
  }

  confirmPasswordValidator(formGroup: FormGroup): ValidationErrors {
    const pass = formGroup.get('password').value;
    const confirmPass = formGroup.get('confirmPassword').value;
    return pass !== confirmPass ? {'notConfirmed': true} : null;
  }

  onSubmit() {
    console.log(this.form);
  }

  onTemplateFormSubmit() {
    console.log(this.templateFrom);
  }

}
