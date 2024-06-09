import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginModalService } from '../modal/login-modal/login-modal.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})

export class TopBarComponent {
  items: MenuItem[];

  constructor(private loginModalComponent: LoginModalService) {
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

  openDialog(): void {
    this.loginModalComponent.openModal({ data: 'Some data to pass' });
  }

}
