import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { FormGroup, FormControl, Validators  } from '@angular/forms';

import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

formData: FormGroup=new FormGroup({});
emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(public dialog: MatDialog,private _router:Router, private userservice:UserService) { 
   
}
  
onClickSubmit(){
  if(this.formData.value.EmailId=="admin@gmail.com" && this.formData.value.Password=='admin')
  {
    console.log('admin');
    this._router.navigate(['/view']) 
  }
  else{
    this.userservice.login(this.formData.value).subscribe(data =>{
      this._router.navigate(['/user']) 
    });
  }
    }

    // console.log(this.formData.value);
    // this.userservice.Login(this.formData.value).subscribe(data =>{
      
    // })
    // this.formData.reset();
    // alert("Registration successfull");

   
  ngOnInit(): void {this.formData=new FormGroup({
    AirlineName: new FormControl(""),
    EmailId:new FormControl('',[Validators.required,Validators.email]),
    Password:new FormControl('',Validators.required)
  })
};

get uname(){
  return this.formData.get('EmailId');
}
get Password(){
  return this.formData.get('Password');
}
}




