import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEtablissementModalComponent } from './add-etablissement-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AddEtablissementModalService {

  constructor(private dialog: MatDialog) {}

  openModal(data: any): void {
    
    const dialogRef = this.dialog.open(AddEtablissementModalComponent, {
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
