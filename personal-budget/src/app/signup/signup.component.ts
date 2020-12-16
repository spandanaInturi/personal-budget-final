import { getParseErrors } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails.service'

@Component({
  selector: 'pb-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public email:string="";
  public password:string="";
  public confirm_password:string = "";

  constructor(private userservice:UserdetailsService) { }


  ngOnInit(): void {
  }

  public registerUser() {
    console.log("hello entered");


    if(this.password!=this.confirm_password){
      console.log("not valid password")

    }
    else{
      let user_obj:any={};
      user_obj.email=this.email;
      user_obj.password = this.password;
      console.log(user_obj)
      this.userservice.post_userdetails(user_obj).subscribe((response:any)=>{
        console.log(response)
      });
    }

  }

}
