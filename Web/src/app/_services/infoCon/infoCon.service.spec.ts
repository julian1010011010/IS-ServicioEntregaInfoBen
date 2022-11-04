import { TestBed } from '@angular/core/testing';

import { InfoConService } from './infoCon.service';

describe('InfoConService', () => {
  let service: InfoConService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoConService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
