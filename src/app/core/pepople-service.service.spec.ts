import { TestBed } from '@angular/core/testing';

import { PepopleServiceService } from './pepople-service.service';

describe('PepopleServiceService', () => {
  let service: PepopleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PepopleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
