import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmModalComponent } from './confirm-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmModalService {

  constructor(private dialog: MatDialog) { }

  openModal(data: any){
    
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '800px',
      height: '200px',
      data: data,
    });

    return dialogRef.afterClosed();
  }
}
