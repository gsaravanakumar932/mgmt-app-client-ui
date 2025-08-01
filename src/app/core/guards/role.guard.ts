import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['role'];
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (this.auth.isLoggedIn() && user.role === expectedRole) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
