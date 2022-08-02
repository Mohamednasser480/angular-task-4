import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userlogin = { username: '', password: '' };

  constructor() {}

  ngOnInit(): void {}

  login(user: any) {
    this.userlogin.password = '';
    this.userlogin.username = '';

    console.log(user);
  }
}