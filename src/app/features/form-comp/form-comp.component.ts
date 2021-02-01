import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.scss']
})
export class FormCompComponent implements OnInit {
  form: FormGroup | undefined;
  submitted = true;

  templateFrom = {
    email: '',
    password: ''
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      'email': [''],
      'passwordGroup': this.fb.group(
        {
          'password': ['', Validators.required],
          'confirmPassword': ['', Validators.required],
        },
        {
          validators: this.confirmPasswordValidator
        }),
      'nickName': ['']
    })
  }

  confirmPasswordValidator(formGroup: FormGroup): ValidationErrors {
    const pass = formGroup.get('password').value;
    const confirmPass = formGroup.get('confirmPassword').value;
    return pass !== confirmPass ? { 'notConfirmed': true } : null;
  }

  onSubmit() {
    // console.log(this.form);
    this.form.addControl("age", new FormControl('', [Validators.required]));
  }

  onTemplateFormSubmit() {
    // console.log(this.templateFrom);
  }

}
