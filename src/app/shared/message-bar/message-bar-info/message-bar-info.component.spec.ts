import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBarInfoComponent } from './message-bar-info.component';

describe('MessageBarInfoComponent', () => {
  let component: MessageBarInfoComponent;
  let fixture: ComponentFixture<MessageBarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageBarInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageBarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
