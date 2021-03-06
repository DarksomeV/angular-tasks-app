import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-main',
  templateUrl: './auth-main.component.html',
  styleUrls: ['./auth-main.component.css']
})
export class AuthMainComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (this.router.url === '/auth') {
      this.router.navigate(['/auth/login']);
    }
  }

}
