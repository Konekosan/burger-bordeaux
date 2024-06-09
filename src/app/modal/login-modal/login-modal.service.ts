import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from './login-modal.component';

@Injectable({
  providedIn: 'root'
})
export class LoginModalService {

  constructor(private dialog: MatDialog) {}
  private apiUrl = 'https://localhost:5000/login'; // URL de votre API

  openModal(data: any): void {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '800px',
      height: '300px',
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}
