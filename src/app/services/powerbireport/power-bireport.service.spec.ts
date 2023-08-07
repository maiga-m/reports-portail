import { TestBed } from '@angular/core/testing';

import { PowerBIReportService } from './power-bireport.service';

describe('PowerBIReportService', () => {
  let service: PowerBIReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowerBIReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
