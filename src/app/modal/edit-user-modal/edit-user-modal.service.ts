import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditUserModalComponent } from './edit-user-modal.component';

@Injectable({
  providedIn: 'root'
})
export class EditUserModalService {

  constructor(private dialog: MatDialog) { }

  openModal(data: any){
    
    const dialogRef = this.dialog.open(EditUserModalComponent, {
      width: '800px',
      height: '550px',
      data: data,
    });

    return dialogRef.afterClosed();
  }
}
