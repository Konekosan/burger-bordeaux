import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

  url = 'http://localhost:8000/';
  user_url = this.url + 'etablissement/'

  datas: any = [];
  header_node = {
    Accept: 'application/json',
  }

  constructor(private httpClient: HttpClient) { }

  getEtablissements() {
    return this.httpClient.get(this.user_url, { headers: this.header_node });
  }

}
