export interface Document {
  id: string;
  name: string;
  url: string;
  uploadedAt: string;
  status: 'pending' | 'ingested' | 'failed';
}
