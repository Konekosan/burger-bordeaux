import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Usager } from '../../model/usager.model';
import { UsagerService } from '../../usager/usager.service';
import { MessageBarService } from '../../shared/message-bar/message-bar.service';
import { messages } from '../../model/messages.model';
import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrl: './edit-user-modal.component.css'
})
export class EditUserModalComponent implements OnInit {

  usagerForm: FormGroup;
  usager: Usager;
  public onUpdateSuccess: EventEmitter<any> = new EventEmitter();


  constructor(public dialogRef: MatDialogRef<EditUserModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private usagerService: UsagerService,
              private messageBarService: MessageBarService){}

  ngOnInit(): void {
    this.fetchUsagerById();
  }

  fetchUsagerById() {
    const idUsager = this.data.data
    this.usagerService.getUsager(idUsager).subscribe(response => {
      this.usager = response[0];
    })
  }

  onSubmit(): void { 
    this.usagerService.updateUsager(this.usager).subscribe(response => {
      this.messageBarService.setMessage(messages.SUCCES.MESSSGE_EDIT_USER);
      this.messageBarService.toggleMessageBarSuccess();
      this.onUpdateSuccess.emit();
      this.dialogRef.close();
    }, error => {
      console.log('Erreur lors de la récupération ', error);
      this.messageBarService.setMessage(messages.ERREUR.MESSAGE_ERREUR);
      this.messageBarService.toggleMessageBarError();
      this.dialogRef.close();
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
