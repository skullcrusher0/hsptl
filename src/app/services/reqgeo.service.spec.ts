import { TestBed } from '@angular/core/testing';

import { ReqgeoService } from './reqgeo.service';

describe('ReqgeoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReqgeoService = TestBed.get(ReqgeoService);
    expect(service).toBeTruthy();
  });
});
