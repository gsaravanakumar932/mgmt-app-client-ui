import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatToolbarModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  authService= inject(AuthService);
  isLoggedIn = this.authService.isAuthenticated();

  logout() {
    this.authService.logout();
  }

}
