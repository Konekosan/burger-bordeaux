import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddEtablissementModalService {

  private showModalSource = new Subject<boolean>();
  showModal$ = this.showModalSource.asObservable()

  constructor() { }

  openModal() {
    this.showModalSource.next(true);
  }

  closeModal() {
    this.showModalSource.next(false);
  }
}
