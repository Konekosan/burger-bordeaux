import { Component } from '@angular/core';
import { UsagerService } from './usager.service';

@Component({
  selector: 'app-usager',
  templateUrl: './usager.component.html',
  styleUrl: './usager.component.css'
})
export class UsagerComponent {
  datas: any = [];

  constructor(private usagerService: UsagerService) { }

  ngOnInit() {
    this.usagerService.getUsers().subscribe((data: any) => {
      this.datas = data[0];
    });
  }

  load(){ 
    console.log('a');
  }

}
