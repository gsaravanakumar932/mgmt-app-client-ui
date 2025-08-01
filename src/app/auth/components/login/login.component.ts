import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  imports: [MatDividerModule, MatIconModule, MatCardModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  loginWithGoogle() {
    if (typeof this.authService.googleLogin === 'function') {
      this.authService.googleLogin();
    } else {
      console.warn('Google login is not implemented in AuthService.');
    }
  }
  onFacebookLogin() {
    console.log('Facebook login clicked');
  }
}
