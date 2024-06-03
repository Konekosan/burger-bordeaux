import { TestBed } from '@angular/core/testing';

import { AddEtablissementModalService } from './add-etablissement-modal.service';

describe('AddEtablissementModalService', () => {
  let service: AddEtablissementModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddEtablissementModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
