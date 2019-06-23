import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(null, { validators: [Validators.required, Validators.email], updateOn: 'blur' }),
    password: new FormControl('', {validators: [Validators.required, Validators.minLength(6)], updateOn: 'blur'})
  });
  constructor() { }

  ngOnInit() {
  }

  // get input() { return this.loginForm.get('email'); }

}
