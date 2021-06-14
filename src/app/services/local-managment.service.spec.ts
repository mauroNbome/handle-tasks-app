import { TestBed } from '@angular/core/testing';

import { LocalManagmentService } from './local-managment.service';

describe('LocalManagmentService', () => {
  let service: LocalManagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalManagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
