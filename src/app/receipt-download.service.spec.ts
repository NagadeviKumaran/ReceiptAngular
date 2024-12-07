import { TestBed } from '@angular/core/testing';

import { ReceiptDownloadService } from './receipt-download.service';

describe('ReceiptDownloadService', () => {
  let service: ReceiptDownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceiptDownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
