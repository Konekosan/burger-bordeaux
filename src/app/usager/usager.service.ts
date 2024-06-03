import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { USAGER } from '../model/mock-usager';

@Injectable({
  providedIn: 'root'
})
export class UsagerService {

  url = 'http://localhost:8000/';
  user_url = this.url + 'user/'

  datas: any = [];
  header_node = {
    Accept: 'application/json',
  }

  constructor(private httpClient: HttpClient) { }

  getMockUsers() {
    return USAGER;
  }

  getUsers() {
    return this.httpClient.get(this.user_url, { headers: this.header_node });
  }


}
