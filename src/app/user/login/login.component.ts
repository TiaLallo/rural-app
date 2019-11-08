import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {UserCredentials} from '../user-credentials';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userCredentials: UserCredentials;
  loginFailed: boolean;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {
    this.userCredentials = new UserCredentials();
    this.loginFailed = false;
    this.errorMessage = '';
  }

  ngOnInit() {
    this.authService.signOutUser();
  }

  onSignIn() {
    console.log(this.userCredentials);
    this.loginFailed = false;
    this.errorMessage = '';
    this.authService.signInUser(this.userCredentials).subscribe(result => {
      this.router.navigate(['/contacts']);
    }, error => {
      this.userCredentials.username = '';
      this.userCredentials.password = '';
      this.loginFailed = true;
      this.errorMessage = 'Wrong username or password';
      console.error('User sign in failed');
    });
  }
}
