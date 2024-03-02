import { TestBed } from '@angular/core/testing';

import { SelectedCharactersService } from './selected-characters.service';

describe('SelectedCharactersService', () => {
  let service: SelectedCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
