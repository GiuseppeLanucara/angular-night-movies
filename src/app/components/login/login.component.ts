import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = "";
  password = "";
  errorMsg = "";


  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "Username required";
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password required";
    } else {
      this.errorMsg = "";
    }
  }
}
