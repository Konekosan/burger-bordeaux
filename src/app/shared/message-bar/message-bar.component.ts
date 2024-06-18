import { Component } from '@angular/core';
import { MessageBarService } from './message-bar.service'

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrl: './message-bar.component.css'
})
export class MessageBarComponent {

  showMessageBarError: boolean = false;
  showMessageBarInfo: boolean = false;
  showMessageBarSuccess: boolean = false;
  //message: string;

  constructor(public messageBarService: MessageBarService) { }

  toggleMessageBarError(message: string): void {
    this.messageBarService.setMessage(message);
    this.messageBarService.toggleMessageBarError();
  }

  toggleMessageBarInfo(message: string): void {
    this.messageBarService.setMessage(message);
    this.messageBarService.toggleMessageBarInfo();
  }

  toggleMessageBarSuccess(message: string): void {
    this.messageBarService.setMessage(message);
    this.messageBarService.toggleMessageBarSuccess();
  }

}
