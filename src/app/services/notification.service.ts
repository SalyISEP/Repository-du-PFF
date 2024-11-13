import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private apiUrl = 'https://api.example.com/notifications';

  constructor(private http: HttpClient) {}

  // Envoyer une notification de paiement
  sendPaymentNotification(userId: string, message: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/send`, { userId, message });
  }
}
