import { TestBed } from '@angular/core/testing';

import { FundooAccountServiceService } from './fundoo-account-service.service';

describe('FundooAccountServiceService', () => {
  let service: FundooAccountServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundooAccountServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
