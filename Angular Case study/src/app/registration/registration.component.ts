import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminComponent } from '../admin/admin.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  formData: FormGroup=new FormGroup({});

  constructor(private adminService:AdminService ,private _router:Router) { }

  onClickSubmit(){
    console.log(this.formData.value);
    this.adminService.registerUser(this.formData.value).subscribe(data =>{
      this._router.navigate(['\login']).then(()=>{window.location.reload()})  ;
    })
    this.formData.reset();
    alert("Registration successfull");
   
    }
  
    ngOnInit(): void {
      this.formData=new FormGroup({
        Name: new FormControl('',Validators.required),
        EmailId:new FormControl('',[Validators.required,Validators.email]),
        Password:new FormControl('',Validators.required),
        ContactNumber:new FormControl('',Validators.required),
        Age:new FormControl('',Validators.required),
        Gender:new FormControl('',Validators.required)

      })
    };
 

}