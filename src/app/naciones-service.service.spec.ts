import { TestBed } from '@angular/core/testing';

import { NacionesServiceService } from './naciones-service.service';

describe('NacionesServiceService', () => {
  let service: NacionesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NacionesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
