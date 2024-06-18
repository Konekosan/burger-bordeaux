import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBarDeleteComponent } from './message-bar-delete.component';

describe('MessageBarDeleteComponent', () => {
  let component: MessageBarDeleteComponent;
  let fixture: ComponentFixture<MessageBarDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageBarDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageBarDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
