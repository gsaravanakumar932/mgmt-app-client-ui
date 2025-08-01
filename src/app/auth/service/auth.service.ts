import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  googleLogin() {
    const googleAuthUrl = 'https://accounts.google.com/o/oauth2/auth';
    const params = new HttpParams()
      .set('client_id', environment.GOOGLE_CLIENT_ID)
      .set('redirect_uri', 'http://localhost:4200/auth/callback')
      .set('response_type', 'code')
      .set('scope', 'email profile')
    window.location.href = `${googleAuthUrl}?${params.toString()}`;
  }

  exchangeCodeForToken(code: string) {
    this.http
      .post(`${environment.apiBaseUrl}/auth/google`, { code })
      .subscribe((res: any) => {
        sessionStorage.setItem('jwt', res.access_token);
        sessionStorage.setItem('user', res.id)
        this.router.navigate(['/dashboard']); // Redirect after login
      });
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('jwt');
  }

  isSelfUser(id: string){
    return id === sessionStorage.getItem('user');
  }
}
