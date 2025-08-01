import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpEvent } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private api: ApiService) {}

  getUsers(): Observable<HttpEvent<User[]>> {
    return this.api.get<User[]>('users');
  }

  updateUserRole(userId: string, role: string): Observable<any> {
    return this.api.put(`users/${userId}/role`, { role });
  }

  deleteUser(userId: string): Observable<any> {
    return this.api.delete(`users/${userId}`);
  }
}
