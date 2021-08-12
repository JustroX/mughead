import { TestBed } from '@angular/core/testing';

import { GhostApiService } from './ghost-api.service';

describe('GhostApiService', () => {
  let service: GhostApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhostApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
