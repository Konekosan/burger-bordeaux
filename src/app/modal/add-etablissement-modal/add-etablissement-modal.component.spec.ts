import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEtablissementModalComponent } from './add-etablissement-modal.component';

describe('AddEtablissementModalComponent', () => {
  let component: AddEtablissementModalComponent;
  let fixture: ComponentFixture<AddEtablissementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEtablissementModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEtablissementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
