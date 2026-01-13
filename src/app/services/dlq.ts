import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DlqService {
  private url = 'http://localhost:8080/dlq/events';

  constructor(private http: HttpClient) {}

  getDlqEvents() {
    return this.http.get<any[]>(this.url);
  }
}
