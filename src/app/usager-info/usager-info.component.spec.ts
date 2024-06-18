import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsagerInfoComponent } from './usager-info.component';

describe('UsagerInfoComponent', () => {
  let component: UsagerInfoComponent;
  let fixture: ComponentFixture<UsagerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsagerInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsagerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
