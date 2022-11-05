import { TestBed } from '@angular/core/testing';

import { InfoBenService } from './infoBen.service';

describe('InfoBenService', () => {
  let service: InfoBenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoBenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
