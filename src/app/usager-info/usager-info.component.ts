import { Component, OnInit } from '@angular/core';
import { LoginService } from '../authentication/login/login.service'

@Component({
  selector: 'app-usager-info',
  templateUrl: './usager-info.component.html',
  styleUrl: './usager-info.component.css'
})
export class UsagerInfoComponent implements OnInit {

  currentUser: any;

  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {
    this.loginService.currentUserInfo.subscribe(
      response => {
        this.currentUser = response;
      },
      error => {
        console.log('Erreur lors de la récupération ', error);
      }
    );
  }
}
