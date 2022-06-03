import { TestBed } from '@angular/core/testing';

import { ToeknStorageService } from './toekn-storage.service';

describe('ToeknStorageService', () => {
  let service: ToeknStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToeknStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
