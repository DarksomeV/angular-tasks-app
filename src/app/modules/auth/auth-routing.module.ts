import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {AuthMainComponent} from './pages/auth-main/auth-main.component';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'signup', component: SignupComponent},
//   { path: '', redirectTo: '/auth/login'}
// ];

const routes: Routes = [
      {path: '', component: AuthMainComponent, children: [
        {path: 'login', component: LoginComponent},
        {path: 'signup', component: SignupComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
