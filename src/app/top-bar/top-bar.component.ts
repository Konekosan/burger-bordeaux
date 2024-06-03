import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})

export class TopBarComponent {
  items: MenuItem[];

  constructor() {
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

}
