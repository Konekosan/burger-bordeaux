import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service'
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolePermissionsService {

  token: string | null = null;
  permissions: string[] = [];
  private permissionsLoaded = false;

  constructor(private loginService: LoginService) { 

  }

  loadPermissions(): Observable<string[]> {
    if (this.permissionsLoaded) {
      return of(this.permissions);
    }
    return this.loginService.getPermissions().pipe(
      map(response => {
        this.permissions = response.permissions;
        return this.permissions;
      }),
      catchError(() => of([]))
    );
  }

  hasPermission(permission: string): Observable<boolean> {
    return this.loadPermissions().pipe(
      map(() => this.permissions.includes(permission))
    );
  }
}
