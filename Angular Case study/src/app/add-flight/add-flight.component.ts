import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {
 
  formData: FormGroup=new FormGroup({});
  
    constructor(private adminService:AdminService,private _router:Router) { }
  onClickSubmit(){
    console.log(this.formData.value);
    this.adminService.addFlight(this.formData.value).subscribe(data =>{
      alert("Add/Schedule Flight Done successfully");
      this._router.navigate(['\view']).then(()=>{window.location.reload()})  ;
  },
  err => alert("Registration failed"));
  this.formData.reset();
 
  }
    ngOnInit(): void {
      this.formData=new FormGroup({
        FlightNumber:new FormControl(''),
        AirlineName: new FormControl(""),
        FromPlace:new FormControl(''),
        ToPlace:new FormControl(''),
        StartDateTime:new FormControl(''),
        EndDateTime:new FormControl(''),
        SecheduledDays:new FormControl(''),
        BusinessClassSeats:new FormControl(''),
        TicketCost:new FormControl(''),
        NumberOfRows:new FormControl(''),
        Meal:new FormControl('')

      })
    };
  
  }
  