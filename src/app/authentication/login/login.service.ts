import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8000/';
  private urlLogin = this.apiUrl + 'user/login';
  private urlMe = this.apiUrl + 'user/me';
  private userInterface = new BehaviorSubject<any>(null);
  currentUserInfo = this.userInterface.asObservable();

  constructor(private httpClient: HttpClient,
              private router: Router) { }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'accept': 'application/json'
    })

    const dataLogin = new URLSearchParams();
    dataLogin.set('grant_type','');
    dataLogin.set('username', username);
    dataLogin.set('password', password);
    dataLogin.set('scope','');
    dataLogin.set('client_id','');
    dataLogin.set('client_secret','');

    return this.httpClient.post<any>(this.urlLogin, dataLogin.toString(), { headers: headers })
      .pipe(tap(response => {
        this.setToken(response.access_token);
        this.getCurrentUser(response.access_token).subscribe();
      }))
  }

  private setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  private getToken() {
    return localStorage.getItem('authToken');
  }

  checkUser(): void {
    const token = this.getToken();
    if (token) {
      this.getCurrentUser(token).subscribe();
    }
  }

  getCurrentUser(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.get(this.urlMe, { headers });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/'])
  }

  updateUserInfo(usagerInfo: any) {
    this.userInterface.next(usagerInfo);
  }
}
