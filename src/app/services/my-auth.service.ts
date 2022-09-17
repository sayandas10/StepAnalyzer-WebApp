import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MyAuthService {

  constructor(private router: Router) { }

  authenticate(username:string, password:string, token:string) {
        sessionStorage.setItem("username", username);
        let tokenStr = "Bearer " + token;
        sessionStorage.setItem("token", tokenStr);
        console.log("token",sessionStorage.getItem("token"))
  }

  isUserLoggedIn() {
    if (sessionStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  logOut() {
    this.router.navigate(['login']);
    sessionStorage.clear();
  }
}
