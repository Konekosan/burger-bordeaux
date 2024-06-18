import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

  // routes
  url = 'http://localhost:8000/';
  etablisements_url = this.url + 'etablissement/'
  create_etablissement = this.etablisements_url + 'create'
  ranked_etablissement = this.etablisements_url + 'note'
  datas: any = [];

  header_node = {
    Accept: 'application/json',
  }

  constructor(private httpClient: HttpClient) { }

  getEtablissements() : Observable<any>{
    return this.httpClient.get(this.ranked_etablissement, { headers: this.header_node });
  }

  createEtablissement(data: any)  {
    return this.httpClient.post<any>(this.create_etablissement, data, { headers: this.header_node })
  }

}
