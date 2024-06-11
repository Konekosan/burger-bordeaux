import { Component, OnInit, OnChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginModalService } from '../modal/login-modal/login-modal.service';
import { LoginService } from '../authentication/login/login.service'


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})

export class TopBarComponent {
  items: MenuItem[];
  usagerInfo: any;
  token: string | null = null;

  constructor(private loginModalComponent: LoginModalService,
      private loginService:LoginService
      ) {
    this.items = [
      {
        label: 'Admin',
        items: [
            { label: 'Usager', icon: 'pi pi-fw pi-plus' },
            { label: 'Burger', icon: 'pi pi-fw pi-folder-open' }
        ]
      },
    ];
  }

  ngOnChanges(): void {

  }

  ngOnInit(): void {
    this.loginService.currentUserInfo.subscribe(
      info => {
        this.usagerInfo = info;
        console.log('usager info', this.usagerInfo);
      }
    )
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.getUser();
    }
  }

  getUser() {
    if (this.token) {
      this.loginService.getCurrentUser(this.token).subscribe(
        response => {
          console.log('User info', response);
          this.loginService.updateUserInfo(response);
        },
        error => {
          console.log('Failed ', error);
        }
      );
    }
  }

  logout() {
    this.loginService.logout();
    this.usagerInfo = null;
  }
  
  openDialog(): void {
    this.loginModalComponent.openModal({ data: 'Some data to pass' });
  }

}
