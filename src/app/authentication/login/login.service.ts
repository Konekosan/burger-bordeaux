import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Usager } from '../../model/usager.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8000/';
  private urlLogin = this.apiUrl + 'user/login';
  private urlMe = this.apiUrl + 'user/me';
  private urlMePermission = this.apiUrl + 'admin/me/permissions'

  private userInfoSource = new BehaviorSubject<any>(null);
  currentUserInfo = this.userInfoSource.asObservable();

  token: string | null = null;
  usagerInfo: any;
  usagerRole: Usager | undefined;

  headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'accept': 'application/json'
  })

  constructor(private httpClient: HttpClient,
              private router: Router) { 
    this.token = localStorage.getItem('authToken');
    if (this.token) {
      this.getCurrentUser(this.token).subscribe();
    }
  }

  login(username: string, password: string): Observable<any> {

    const dataLogin = new URLSearchParams();
    dataLogin.set('grant_type','');
    dataLogin.set('username', username);
    dataLogin.set('password', password);
    dataLogin.set('scope','');
    dataLogin.set('client_id','');
    dataLogin.set('client_secret','');

    return this.httpClient.post<any>(this.urlLogin, dataLogin.toString(), { headers: this.headers })
      .pipe(tap(response => {
        this.setToken(response.access_token);
        this.getCurrentUser(response.access_token).subscribe(currentUser => {
          this.userInfoSource.next(currentUser);
        });
        this.userInfoSource.next(response);
      }))
  }

  getPermissions(): Observable<{ permissions: string[] }> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.httpClient.get<{ permissions: string[] }>(this.urlMePermission, { headers: headers });
  }

  private setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getCurrentUser(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.get(this.urlMe, { headers }).pipe(
      tap(currentUsager => this.userInfoSource.next(currentUsager))
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.userInfoSource.next(null);
    this.router.navigate(['']);
  }

}
