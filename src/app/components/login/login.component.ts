import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = "";
  password = "";
  errorMsg = "";

  constructor(private auth: AuthService, private router: Router) {

  }

  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "Username required";
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password required";
    } else {
      this.errorMsg = "";
      let resp = this.auth.login(this.username, this.password);
      if (resp === 200) {
        this.router.navigate(['home'])
      }
      if (resp === 403) {
        this.errorMsg = "Credentials are not valid!";
      }
    }
  }
}
