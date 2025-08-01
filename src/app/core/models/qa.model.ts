export interface QAResponse {
  question: string;
  answer: string;
  sources: Array<{ docId: string; excerpt: string }>;
}
