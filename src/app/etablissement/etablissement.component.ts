import { Component } from '@angular/core';
import { EtablissementService } from './etablissement.service';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrl: './etablissement.component.css'
})
export class EtablissementComponent {
  etablissements: any = [];

  constructor(private etablissementService: EtablissementService) { }

  ngOnInit() {
    this.etablissementService.getEtablissements().subscribe((data: any) => {
      this.etablissements = data[0];
      console.log(this.etablissements);
    });
  }
}
