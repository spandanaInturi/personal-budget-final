import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails.service'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'pb-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private userservice:UserdetailsService,private _router:Router) { }
  specialEvents = []

  ngOnInit(){
    this.userservice.event().subscribe(res=> this.specialEvents = res,
      res=>{
        if (res){
           this._router.navigate (['/contact'])
        }
      }

  )

  }


}
