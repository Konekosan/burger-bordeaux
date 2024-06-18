import { Component } from '@angular/core';

@Component({
  selector: 'app-message-bar-info',
  templateUrl: './message-bar-info.component.html',
  styleUrl: './message-bar-info.component.css'
})
export class MessageBarInfoComponent {
  message: string= "Error lors de la modification";
}
