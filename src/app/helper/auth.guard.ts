import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private router: Router, ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token: any = localStorage.getItem('token');

    if (!token) {
        this.router.navigate(['/login']);
        localStorage.clear();
        return false;
    }else{
      return true;
    }
  }
}
