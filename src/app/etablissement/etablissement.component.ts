import { Component, OnInit } from '@angular/core';
import { EtablissementService } from './etablissement.service';
import { AddEtablissementModalService } from '../modal/add-etablissement-modal/add-etablissement-modal.service'

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrl: './etablissement.component.css'
})
export class EtablissementComponent implements OnInit{
  etablissements: any = [];

  constructor(private etablissementService: EtablissementService,
              private modalEtablissement: AddEtablissementModalService) { }

  ngOnInit() {
    this.etablissementService.getEtablissements().subscribe((data: any) => {
      this.etablissements = data;
    });
  }

  openDialog(): void {
    this.modalEtablissement.openModal({ data: 'Some data to pass' });
  }
}
