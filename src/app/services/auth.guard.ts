import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MyAuthService } from './my-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // user:User=new User();
  constructor(private myService:MyAuthService,private router:Router){

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.myService.isUserLoggedIn()) {
        return true;
      }
  
      this.router.navigate(['login']);
      return false;
  }
  
}
