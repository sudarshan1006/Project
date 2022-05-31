import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  searchdata:any;
  ishistory:any=true;
  IsSearch:boolean=true;
  isbooked:boolean=false;
  bookingDetails:any;
  formData: FormGroup=new FormGroup({});
  formData1: FormGroup=new FormGroup({});
  formData2:FormGroup=new FormGroup({});
  flightnumber:any
  PNR:any;
  Isresult:boolean=false
  constructor(private userservice:UserService) {
    console.log(this.flightnumber);
    this.formData1=new FormGroup({
      PNR: new FormControl(),
     });
   }

  onClickSubmit():void{
    this.Isresult=false
    console.log(this.formData.value);
    this.userservice.Search(this.formData.value).subscribe(data =>{
      console.log(data);
      this.searchdata=data;
      this.IsSearch=true;
      console.log(this.searchdata);
    })
    this.formData.reset();
    
    }
    history(){
      this.Isresult=false;
        this.ishistory=true;
        this.isbooked=false;
        this.userservice.History(this.formData1.value).subscribe(data =>{
          this.bookingDetails=data
         console.log(this.bookingDetails);
        })
    }
    PNRData(){
      this.Isresult=true;
      
      this.userservice.History(this.formData1.value).subscribe(data =>{
        this.bookingDetails=data
       console.log(this.bookingDetails);
      });
    }
    Search(){
      this.Isresult=false;
      this.ishistory=false;
  }
  opendeleteDialog(flightnumber:any){
    this.Isresult=false;
    this.flightnumber=flightnumber;
    console.log(this.flightnumber);
      this.isbooked=true;
      console.log(this.isbooked);
      this.formData2=new FormGroup({
        FlightNumber: new FormControl(this.flightnumber),
        Name:new FormControl(),
        Age:new FormControl(),
        Gender:new FormControl(),
        BusinessClassSeats:new FormControl(),
        NonBusinessClassSeats:new FormControl(),
        CouponCode:new FormControl(),
        BookingDate:new FormControl()
      });
    }
    BookTicket(){
      this.Isresult=false;
      this.IsSearch=true;
      console.log("Coupon"+this.formData2.value.CouponCode);
      this.userservice.bookticket(this.formData2.value).subscribe(data =>{
        this.PNR=data
        alert("Ticket booking is done Successfully"+this.PNR);
      })
      this.formData.reset();


    }
    cancel(PNR:any){
      console.log(PNR);
      this.userservice.cancelticket(PNR).subscribe(data =>{
   
        alert(PNR+"Cancelled succesfully");
      })

    }
    ngOnInit(): void {
      this.formData=new FormGroup({
        FromPlace: new FormControl(""),
        ToPlace:new FormControl("")

      })
      
    };
  

}
