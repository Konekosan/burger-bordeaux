import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../authentication/login/login.service'

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent implements OnInit {
  value = 1;
  loginForm: FormGroup;
  token: string | null = null;

  constructor(
    public dialogRef: MatDialogRef<LoginModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  login() {
    const loginFormValue = this.loginForm.value

    this.loginService.login(loginFormValue.username, loginFormValue.password).subscribe(
      response => {
        this.token = response.access_token;
        console.log('Login Sucessful', response);
        this.dialogRef.close();
      },
      error => {
        console.log('Login failed', error);
      }
    )
  }
}
