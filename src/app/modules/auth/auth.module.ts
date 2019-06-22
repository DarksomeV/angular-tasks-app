import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthMainComponent } from './pages/auth-main/auth-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class AuthModule { }
