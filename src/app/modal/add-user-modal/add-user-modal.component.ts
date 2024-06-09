import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsagerService } from '../../usager/usager.service';


@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrl: './add-user-modal.component.css'
})
export class AddUserModalComponent {

  value = 1;
  datas = {};
  usagerForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private usagerService: UsagerService
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup() {
    this.usagerForm = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      age: new FormControl(''),
      username: new FormControl(''),
      hashed_pwd: new FormControl(''),
      is_active: new FormControl('')
    });
  }

  onSubmit(): void {
    this.datas = {
      "parameter": this.usagerForm.value
    } 
    console.log(this.datas);
    this.usagerService.createUsager(this.datas).subscribe(
      response => {
        console.log('Response from API:', response);
        this.dialogRef.close();
      },
      error => {
        console.error('Error from API:', error);
      }
    );
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
