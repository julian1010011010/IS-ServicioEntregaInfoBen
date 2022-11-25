import { TestBed } from '@angular/core/testing';

import { InfoAdtService } from './infoAdt.service';

describe('InfoAdtService', () => {
  let service: InfoAdtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoAdtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
