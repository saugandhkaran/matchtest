import { TestBed, inject } from '@angular/core/testing';

import { GetListOfNamesService } from './get-list-of-names.service';

describe('GetListOfNamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetListOfNamesService]
    });
  });

  it('should be created', inject([GetListOfNamesService], (service: GetListOfNamesService) => {
    expect(service).toBeTruthy();
  }));
});
