import { TestBed } from '@angular/core/testing';

import { ArtifactsCalculationService } from './artifacts-calculation.service';

describe('ArtifactsCalculationService', () => {
  let service: ArtifactsCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactsCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
