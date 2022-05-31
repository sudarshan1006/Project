import { Component, OnInit } from '@angular/core';
import { AddFlightComponent } from '../add-flight/add-flight.component';
import { AdminService } from '../admin.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditFlightComponent } from '../edit-flight/edit-flight.component';
import { AddAirlineComponent } from '../add-airline/add-airline.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  listUser:any;
  airlineData:any;
  isAirline:any=true;
  isschedule:any=false;
  constructor(public dialog: MatDialog,private admin:AdminService) { }
  
  
  openDialog(): void {
    this.dialog.open(AddFlightComponent,{
      width:'80%',
      height:'90%'
    });

  }
  openAddAirlineDialog():void {
    console.log("Addairline")
    this.dialog.open(AddAirlineComponent,{
      width:'20%',
      height:'60%'
    });

  }
  openeditDialog(): void {
    this.dialog.open(EditFlightComponent,{
      width:'80%',
      height:'90%'
    });

  }
 
  opendeleteDialog(value:number): void {
    console.log(value);
    this.admin.blockFlight(value).subscribe(data =>{
    alert("Blocked/Unblocked Successfully")
  })
  }

  ManageSchedule(){
    this.isschedule=true;
    this.isAirline=false
  }
  ManageAirline(){
    this.isAirline=true;
    this.isschedule=false;
  }
  ngOnInit():void  {
    
    this.admin.listAirline().subscribe(data=>{
      this.airlineData=data;
      console.log(this.airlineData);
     
    });
   
    this.admin.listUsers().subscribe(data=>{
      this.listUser=data;
      console.log(this.listUser);
     
    });
   } 
}



