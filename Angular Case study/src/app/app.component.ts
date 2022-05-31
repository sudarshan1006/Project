import { Component } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RegistrationComponent } from './registration/registration.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FlightBooking';
  constructor(public dialog: MatDialog,private _router:Router) { }
  Login():void{
    console.log("ds");
    this._router.navigate(['\login']);
  }
  Registration(): void {
    
    this.dialog.open(RegistrationComponent
      ,{
      width:'30%',
      height:'80%'
    });
  }
 
        

 
}

