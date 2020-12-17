import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  public register_url:string= "http://localhost:1234/signup";
  public login_url:string= "http://localhost:1234/search";
  public event_url:string= "http://localhost:1234/event";

  constructor(private httpobject:HttpClient,private _router:Router) { }

  public get_userdetails(user:any):Observable<any>{
    console.log("enteredlogin service");
    return this.httpobject.post(this.login_url,user)
  }

  public post_userdetails(user:any):Observable<any>{
    console.log("entered service");
    return this.httpobject.post(this.register_url,user)
  }

  public loggedIn()
  {
    return !!localStorage.getItem('token')
  }

  public getToken() {
    return localStorage.getItem('token')
  }

  public logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate([''])
  }
  public event(){
    return this.httpobject.get<any>(this.event_url)
  }
}


