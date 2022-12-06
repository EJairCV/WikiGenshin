import { TestBed } from '@angular/core/testing';

import { EnemigosService } from './enemigos.service';

describe('EnemigosService', () => {
  let service: EnemigosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnemigosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
