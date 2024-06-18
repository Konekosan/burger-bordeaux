import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBarSuccessComponent } from './message-bar-success.component';

describe('MessageBarSuccessComponent', () => {
  let component: MessageBarSuccessComponent;
  let fixture: ComponentFixture<MessageBarSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageBarSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageBarSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
