import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.isUserLogged()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  isUserLogged(): boolean {
    const accessToken = this.authService.getAccessToken();
    const user = this.authService.getUserSession();
    return accessToken !== null && user !== null;
  }
}
