import { TestBed } from '@angular/core/testing';

import { FmcService } from './fmc.service';

describe('FmcService', () => {
  let service: FmcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FmcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
