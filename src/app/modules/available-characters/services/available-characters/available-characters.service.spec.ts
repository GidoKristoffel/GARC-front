import { TestBed } from '@angular/core/testing';

import { AvailableCharactersService } from './available-characters.service';

describe('AvailableCharactersService', () => {
  let service: AvailableCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
