import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { EtablissementService } from '../../etablissement/etablissement.service';
import { MessageBarService } from '../../shared/message-bar/message-bar.service';
import { messages } from '../../model/messages.model';

@Component({
  selector: 'app-add-etablissement-modal',
  templateUrl: './add-etablissement-modal.component.html',
  styleUrl: './add-etablissement-modal.component.css'
})

export class AddEtablissementModalComponent implements OnInit{

  datas = {};
  etablissementForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddEtablissementModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private etablissementService: EtablissementService,
    private messageBarService: MessageBarService) {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup() {
    this.etablissementForm = new FormGroup({
      nom: new FormControl(''),
      adresse: new FormControl(''),
      type: new FormControl(''),
      qualite: new FormControl(''),
      note: new FormControl(''),
      image: new FormControl('')
    });
  }

  onSubmit(): void {
    this.datas = {
      "parameter": this.etablissementForm.value
    }
    this.etablissementService.createEtablissement(this.datas).subscribe(
      response => {
        this.messageBarService.setMessage(messages.SUCCES.MESSAGE_SUCCES_ETABLISSEMENT);
        this.messageBarService.toggleMessageBarSuccess();
        this.dialogRef.close();
      },
      error => {
        this.messageBarService.setMessage(messages.ERREUR.MESSAGE_ERREUR);
        this.messageBarService.toggleMessageBarError();
        this.dialogRef.close();
      }
    );;
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
