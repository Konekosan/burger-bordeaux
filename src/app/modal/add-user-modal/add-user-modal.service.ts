import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserModalComponent } from './add-user-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AddUserModalService {

  constructor(private dialog: MatDialog) {}


  openModal(data: any): void {
    
    const dialogRef = this.dialog.open(AddUserModalComponent, {
      width: '800px',
      height: '650px',
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //console.log(result);
    });
  }
}
