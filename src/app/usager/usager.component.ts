import { Component, OnInit } from '@angular/core';
import { UsagerService } from './usager.service';
import { AddUserModalService } from '../modal/add-user-modal/add-user-modal.service';
import { ConfirmModalService } from '../shared/confirm-modal/confirm-modal.service'
import { EditUserModalService } from '../modal/edit-user-modal/edit-user-modal.service'
import { Usager } from '../model/usager.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usager',
  templateUrl: './usager.component.html',
  styleUrl: './usager.component.css'
})
export class UsagerComponent implements OnInit {
  datas: any = [];
  usager : Usager;
  public onUpdateSuccess: EventEmitter<any> = new EventEmitter();

  constructor(private usagerService: UsagerService,
              private modalUsagerService: AddUserModalService,
              private confirmModal: ConfirmModalService,
              private editUsagerModal: EditUserModalService) { }

  ngOnInit() {
    this.usagerService.getUsers().subscribe((data: any) => {
      this.datas = data[0];
    });

  }

  openDialog(): void {
    this.modalUsagerService.openModal({ data: 'Some data to pass' }).subscribe((newUserData: any) => {
      if(newUserData){
        this.datas.push(newUserData[0]);
      }
    });
  }

  removeUsager(idUsager: string, nom: string, prenom: string): void {
    this.confirmModal.openModal({ data:  `Vous allez supprimer ${nom} ${prenom}`}).subscribe((result: any) => {
      if (result) {
        this.usagerService.removeUsager(idUsager).subscribe(
          () => {
            this.datas = this.datas.filter((data: any) => data.id !== idUsager);
          },
          error => {
            console.error('Error occurred:', error);
          }
        );
      }
      return false;
    });
  }

  editUsager(usagerId: number){
    this.editUsagerModal.openModal({data : usagerId}).subscribe((response) => {
      this.refreshData();
    });
  }

  refreshData() {
    this.usagerService.getUsers().subscribe((data: any) => {
      this.datas = data[0];
    });
  }
}
