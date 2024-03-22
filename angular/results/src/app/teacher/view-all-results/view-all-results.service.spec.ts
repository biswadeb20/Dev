import { TestBed } from '@angular/core/testing';

import { ViewAllResultsService } from './view-all-results.service';

describe('ViewAllResultsService', () => {
  let service: ViewAllResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAllResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
