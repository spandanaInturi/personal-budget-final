import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'pb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   public specialEvents = []

  constructor(private userservice:UserdetailsService,private _router:Router) { }

  ngOnInit(){
    this.userservice.dashboard().subscribe(
      res=>this.specialEvents=res,
      err => {
        if (err instanceof HttpErrorResponse){
          if (err.status == 401){
            this._router.navigate['/login']
          }
        }

      }
  )

  }

}
