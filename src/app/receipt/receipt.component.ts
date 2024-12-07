import { Component } from '@angular/core';
import { ReceiptDownloadService } from '../receipt-download.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.css'
})
export class ReceiptComponent {
  constructor(private receiptService: ReceiptDownloadService) {}

  // Method to handle the download
  onDownloadReport(reportType: string, receiptNumber: string): void {
    this.receiptService.downloadReport(reportType, receiptNumber).subscribe(
      (response: Blob) => {
        const fileURL = URL.createObjectURL(response);
        const a = document.createElement('a');
        a.href = fileURL;
        a.download = `${reportType}_Report.pdf`;
        a.click();
      },
      (error) => {
        console.error('Error downloading the report', error);
      }
    );
  }
}