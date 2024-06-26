import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserModalComponent } from './add-user-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AddUserModalService {
  datas: any[] = [];

  constructor(private dialog: MatDialog) {}

  openModal(data: any){
    
    const dialogRef = this.dialog.open(AddUserModalComponent, {
      width: '800px',
      height: '650px',
      data: data,
    });

    return dialogRef.afterClosed();
  }
}
