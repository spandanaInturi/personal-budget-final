import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails.service'

@Component({
  selector: 'pb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email:String=""
  public password:String=""

  constructor(private userservice:UserdetailsService) { }

  ngOnInit(): void {
  }

  public loginUser() {
    console.log("hello entered");
      let user_obj:any={};
      user_obj.email=this.email;
      user_obj.password = this.password;
      console.log(user_obj)
      this.userservice.get_userdetails(user_obj).subscribe((response:any)=>{
        console.log(response)
      });

    }

}

