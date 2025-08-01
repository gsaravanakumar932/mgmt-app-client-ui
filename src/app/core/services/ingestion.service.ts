import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IngestionService {
  constructor(private api: ApiService) {}

  triggerIngestion(docId: string): Observable<any> {
    return this.api.post(`ingestion/${docId}/trigger`, {});
  }

  getIngestionStatus(docId: string): Observable<any> {
    return this.api.get(`ingestion/${docId}/status`);
  }
}
