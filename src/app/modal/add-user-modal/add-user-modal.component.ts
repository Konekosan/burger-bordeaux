import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn, Validators, AbstractControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsagerService } from '../../usager/usager.service';
import { MessageBarService } from '../../shared/message-bar/message-bar.service';
import { messages } from '../../model/messages.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrl: './add-user-modal.component.css'
})
export class AddUserModalComponent implements OnInit{

  datas: any[] = [];
  usagerForm: FormGroup;
  newUserSubject: Subject<any> = new Subject<any>();

  constructor(
    public dialogRef: MatDialogRef<AddUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private usagerService: UsagerService,
    private messageBarService: MessageBarService) {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup() {
    this.usagerForm = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      age: new FormControl(''),
      username: new FormControl(''),
      hashed_pwd: new FormControl('', Validators.minLength(4)),
      confirmPassword: new FormControl('', Validators.minLength(4))
    }, this.passwordMatchValidator());
  }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const passwordControl = control.get('hashed_pwd');
      const confirmPasswordControl = control.get('confirmPassword');

      if (passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value) {
        return { mismatch: true };
      } else {
        return null;
      }
    };
  }

  onSubmit(): void { 
    const newUserData = this.usagerForm.value;

    this.usagerService.createUsager({"parameter": newUserData}).subscribe(
      response => {
        this.messageBarService.setMessage(messages.SUCCES.MESSAGE_SUCCES_USAGER);
        this.messageBarService.toggleMessageBarSuccess();
        this.newUserSubject.next(response);
        this.dialogRef.close(response);
      },
      error => {
        this.messageBarService.setMessage(messages.ERREUR.MESSAGE_ERREUR);
        this.messageBarService.toggleMessageBarError();
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
