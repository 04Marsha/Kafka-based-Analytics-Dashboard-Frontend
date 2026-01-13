import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private url = 'http://localhost:8080/analytics';

  constructor(private http: HttpClient) {}

  getEventsByUser(userId: string) {
    return this.http.get<any[]>(`${this.url}/events/user/${userId}`);
  }
}
