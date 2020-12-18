import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  public register_url:string= "http://localhost:1234/signup";
  public login_url:string= "http://localhost:1234/login";
  public dashboard_url:string= "http://localhost:1234/dashboard";
  public budget_url:string= "http://localhost:1234/budget_details";
  public login_user: any;

  constructor(private httpobject:HttpClient,private _router:Router) { }

  public get_userdetails(user:any):Observable<any>{
    console.log("enteredlogin service");
    console.log(user)
    this.login_user = user.email;
    console.log(this.login_user)
    return this.httpobject.post(this.login_url,user)
  }

  public post_userdetails(user:any):Observable<any>{
    console.log("entered service");
    return this.httpobject.post(this.register_url,user)
  }

  public dashboard(user:any):Observable<any>{
    console.log("userservice email",user)
    return this.httpobject.post(this.dashboard_url,user)
  }

  public add_budget(user:any):Observable<any>{
    console.log("budget details");
    return this.httpobject.post(this.budget_url,user)
  }
  public loggedIn()
  {
    return !!localStorage.getItem('token')
  }

  public getToken() {
    return localStorage.getItem('token')
  }

  public logout() {
    localStorage.removeItem('token')
    this._router.navigate([''])
  }

}


