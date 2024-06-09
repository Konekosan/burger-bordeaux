import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { EtablissementService } from '../../etablissement/etablissement.service';

@Component({
  selector: 'app-add-etablissement-modal',
  templateUrl: './add-etablissement-modal.component.html',
  styleUrl: './add-etablissement-modal.component.css'
})

export class AddEtablissementModalComponent {

  value = 1;
  datas = {};
  etablissementForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddEtablissementModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private etablissementService: EtablissementService
  ) {}

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
    console.log(this.datas);
    this.etablissementService.createEtablissement(this.datas).subscribe(
      response => {
        console.log('Response from API:', response);
        this.dialogRef.close();
      },
      error => {
        console.error('Error from API:', error);
      }
    );;
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
