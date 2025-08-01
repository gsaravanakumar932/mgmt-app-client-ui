import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { QAResponse } from '../models/qa.model';
import { HttpEvent } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class QaService {
  constructor(private api: ApiService) {}

  askQuestion(question: string): Observable<HttpEvent<QAResponse>> {
    return this.api.post<QAResponse>('qa/ask', { question });
  }
}
