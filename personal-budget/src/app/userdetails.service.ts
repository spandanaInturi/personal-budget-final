import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  public register_url:string= "http://localhost:1234/signup";
  public login_url:string= "http://localhost:1234/search";

  constructor(private httpobject:HttpClient) { }

  public get_userdetails(user:any):Observable<any>{
    console.log("enteredlogin service");
    return this.httpobject.post(this.login_url,user)
  }

  public post_userdetails(user:any):Observable<any>{
    console.log("entered service");
    return this.httpobject.post(this.register_url,user)
  }
}


