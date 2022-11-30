import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { AuthenticationService, LoginAckDto, LoginDto } from 'competence_repository_api_typescript-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  mylogin: LoginAckDto = {
    access_token: '',
    id: '',
    email: '',
    name: ''
  };

  loginDto: LoginDto = {
    email: 'java@sse.de',
    password: 'pw'
  };
  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void { }

  myFunc() {
    console.log("function called");
  }

  async signinBtnClicked(): Promise<any> {
    this.authService.authControllerLogin(this.loginDto).subscribe(login => {
      this.mylogin = login;
      this.setApiToken(login.access_token);this.authService.configuration.accessToken = this.mylogin.access_token;
      this.setApiToken(login.access_token);this.authService.configuration.username = this.mylogin.name;
    })
  }

  setApiToken(str: String): void {
    console.log('setApiTopken'+str)
  }
}
