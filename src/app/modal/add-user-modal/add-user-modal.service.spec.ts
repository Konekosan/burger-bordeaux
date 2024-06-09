import { TestBed } from '@angular/core/testing';

import { AddUserModalService } from './add-user-modal.service';

describe('AddUserModalService', () => {
  let service: AddUserModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUserModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
