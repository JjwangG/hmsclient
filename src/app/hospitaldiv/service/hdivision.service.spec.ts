import { TestBed } from '@angular/core/testing';

import { HdivisionService } from './hdivision.service';

describe('HdivisionService', () => {
  let service: HdivisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HdivisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
