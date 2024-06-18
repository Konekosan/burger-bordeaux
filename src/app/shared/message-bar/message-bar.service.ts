import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageBarService {

  showMessageBarError: boolean = false;
  showMessageBarInfo: boolean = false;
  showMessageBarSuccess: boolean = false;
  message: string;

  constructor() { }

  toggleMessageBarError(): void {
    this.showMessageBarError = !this.showMessageBarError;
  }

  toggleMessageBarInfo(): void {
    this.showMessageBarInfo = !this.showMessageBarInfo;
  }

  toggleMessageBarSuccess(): void {
    this.showMessageBarSuccess = !this.showMessageBarSuccess;
  }

  setMessage(message: string) {
    this.message = message;
  }

  clearMessageBar(): void {
    this.showMessageBarError = false;
    this.showMessageBarInfo = false;
    this.showMessageBarSuccess = false;
  }
}
