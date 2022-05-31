import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.scss']
})
export class AddAirlineComponent implements OnInit {
  formData: FormGroup=new FormGroup({});
  
  constructor(private  adminService:AdminService) { }
  onClickSubmit(){
    console.log(this.formData.value);
    this.adminService.addAirline(this.formData.value).subscribe(data =>{
      alert("Airline Details Addeds successfully");
  })
  this.formData.reset();
  
  }
 
  ngOnInit(): void {
    this.formData=new FormGroup({
      FlightNumber: new FormControl(''),
      AirlineName:new FormControl(''),
      ContactNumber:new FormControl('')

    })
  };

  }


