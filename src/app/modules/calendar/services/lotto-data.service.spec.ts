import { TestBed } from '@angular/core/testing';

import { LottoDataService } from './lotto-data.service';

describe('LottoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LottoDataService = TestBed.get(LottoDataService);
    expect(service).toBeTruthy();
  });
});
