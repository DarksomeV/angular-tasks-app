import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordEqualForInput } from '../../../../helpers/validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl(null, {validators: [Validators.required, Validators.email], updateOn: 'blur' }),
    name: new FormControl(null, {validators: [Validators.required, Validators.minLength(4)], updateOn: 'blur' }),
    password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)], updateOn: 'blur' }),
    repeatPassword: new FormControl(null, {validators: [Validators.required, passwordEqualForInput]}),
    agree: new FormControl(false, [Validators.requiredTrue]),
  });
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  get emailInput() { return this.signupForm.get('email'); }
  get nameInput() { return this.signupForm.get('name'); }
  get passwordInput() { return this.signupForm.get('password'); }
  get repeatInput() { return this.signupForm.get('repeatPassword'); }

}
