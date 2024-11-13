import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private apiUrl = 'https://api.example.com/payment';

  constructor(private http: HttpClient) {}

  // Payer une facture
  payBill(billId: string, amount: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/pay`, { billId, amount });
  }

  // Récupérer les factures en attente de paiement
  getPendingBills(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/bills/${userId}`);
  }
}
