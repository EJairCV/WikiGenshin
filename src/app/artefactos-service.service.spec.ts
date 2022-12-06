import { TestBed } from '@angular/core/testing';

import { ArtefactosServiceService } from './artefactos-service.service';

describe('ArtefactosServiceService', () => {
  let service: ArtefactosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtefactosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
