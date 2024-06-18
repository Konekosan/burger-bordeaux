import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Usager } from '../model/usager.model';
@Injectable({
  providedIn: 'root'
})
export class UsagerService {

  url = 'http://localhost:8000/';
  user_url = this.url + 'user/';
  create_usager_url = this.user_url + 'create';
  update_url = this.user_url + 'update';

  datas: any = [];
  header_node = {
    Accept: 'application/json',
  }

  constructor(private httpClient: HttpClient) { }

  getUsager(idUsager: number): Observable<Usager[]>{
    const url = this.user_url + idUsager
    return this.httpClient.get<Usager[]>(url, { headers: this.header_node });
  } 

  updateUsager(usager: Usager) {
    const url = this.update_url
    const datas = {
      "parameter": {
          "id": usager.id,
          "nom": usager.nom,
          "prenom": usager.prenom,
          "age": usager.age,
          "username": usager.username,
          "hashed_pwd": usager.hashed_pwd
      }
  }
    return this.httpClient.post(url, datas, { headers: this.header_node });
  }

  getUsers() {
    return this.httpClient.get(this.user_url, { headers: this.header_node });
  }

  createUsager(data: any)  {
    return this.httpClient.post<any>(this.create_usager_url, data, { headers: this.header_node })
  }

  removeUsager(idUsager: string)  {
    const url = this.user_url + idUsager
    return this.httpClient.delete<any>(url, { headers: this.header_node }).pipe(
      catchError(error => {
        console.error('Error occurred while deleting user:', error);
        return throwError(error);
      })
    );
  }
}
