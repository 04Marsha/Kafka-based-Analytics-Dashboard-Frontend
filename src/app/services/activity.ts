import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private url = 'http://localhost:8081/api/activity';

  constructor(private http: HttpClient) {}

  sendLogin(userId: String) {
    return this.http.post(this.url, {
      userId: userId,
      eventType: 'LOGIN',
      source: 'web',
      metadata: {
        action: 'login-button',
      },
    });
  }
}
