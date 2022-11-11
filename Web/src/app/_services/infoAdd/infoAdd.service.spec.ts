import { TestBed } from '@angular/core/testing';

import { InfoAddService } from './infoAdd.service';

describe('InfoAddService', () => {
  let service: InfoAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
