import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReceiptDownloadService {

  private apiUrl = 'https://localhost:7261/api/Receipt'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Method to download the report
  downloadReport(reportType: string, receiptNumber: string): Observable<Blob> {
    const params = new HttpParams()
      .set('reportType', reportType)
      .set('receiptNumber', receiptNumber);

    return this.http.get(`${this.apiUrl}/DownloadReport`, {
      params: params,
      responseType: 'blob'
    });
  }
}
