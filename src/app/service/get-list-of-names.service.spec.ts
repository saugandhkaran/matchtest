import { TestBed, inject } from '@angular/core/testing';

import { getListOfNamesService } from './get-list-of-names.service';

describe('getListOfNamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [getListOfNamesService]
    });
  });

  it('should be created', inject([getListOfNamesService], (service: getListOfNamesService) => {
    expect(service).toBeTruthy();
  }));
});
