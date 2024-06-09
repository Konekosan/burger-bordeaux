import { Component } from '@angular/core';
import { UsagerService } from './usager.service';
import { AddUserModalService } from '../modal/add-user-modal/add-user-modal.service';


@Component({
  selector: 'app-usager',
  templateUrl: './usager.component.html',
  styleUrl: './usager.component.css'
})
export class UsagerComponent {
  datas: any = [];

  constructor(private usagerService: UsagerService,
              private modalUsagerService: AddUserModalService
  ) { }

  ngOnInit() {
    this.usagerService.getUsers().subscribe((data: any) => {
      this.datas = data[0];
    });
  }

  openDialog(): void {
    this.modalUsagerService.openModal({ data: 'Some data to pass' });
  }

  removeUsager(idUsager: string): void {
    console.log(idUsager);
    this.usagerService.removeUsager(idUsager);
  }

  load(){ 
    console.log('a');
  }

}
