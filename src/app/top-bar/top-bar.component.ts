import { Component, OnInit, OnChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginModalService } from '../modal/login-modal/login-modal.service';
import { LoginService } from '../authentication/login/login.service'
import { RolePermissionsService } from '../authentication/role-permissions.service'
import { combineLatest } from 'rxjs';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})

export class TopBarComponent implements OnInit{
  items: MenuItem[];
  usagerInfo: any;
  token: string | null = null;
  showAdminButton: Boolean = false;
  
  constructor(private loginModalComponent: LoginModalService,
              private loginService: LoginService,
              private rolePermissionService: RolePermissionsService) {
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

  ngOnInit(): void {
    combineLatest([
      this.loginService.currentUserInfo,
      this.rolePermissionService.hasPermission('canSeeAdmin')
    ]).subscribe(([userInfo, hasPermission]) => {
      this.usagerInfo = userInfo;
      this.showAdminButton = hasPermission;
    }, error => {
      console.log('Erreur lors de la récupération ', error);
    });
  }
  
  logout() {
    this.loginService.logout();
    this.usagerInfo = null;
    this.showAdminButton = false;
  }
  
  openDialog(): void {
    this.loginModalComponent.openModal({ data: 'Some data to pass' });
  }

}
