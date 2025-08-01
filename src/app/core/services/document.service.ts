import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Document } from '../models/document.model';
import { HttpEvent } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DocumentService {
  constructor(private api: ApiService) {}

  uploadDocument(file: File): Observable<HttpEvent<Document>> {
    const formData = new FormData();
    formData.append('file', file);
    return this.api.post<Document>('documents/upload', formData);
  }

  getDocuments(): Observable<HttpEvent<Document[]>> {
    return this.api.get<Document[]>('documents');
  }

  deleteDocument(id: string): Observable<any> {
    return this.api.delete(`documents/${id}`);
  }
}
