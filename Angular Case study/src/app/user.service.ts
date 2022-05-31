import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string ='http://localhost:5900/';
  constructor(private http: HttpClient ) {}


bookticket(res:any)
{
  console.log(res.Coupon);
  return  this.http.post(this.baseUrl+'BookTicket/'+"abc@gmail.com"+'/'+res.FlightNumber,res)
}
  Search(res:any){
    
    return  this.http.get(this.baseUrl+'Search/'+res.FromPlace+'/'+res.ToPlace)
    
  }
  History(res:any){
    
    return  this.http.get(this.baseUrl+'PNR/'+res.PNR)
    
  }
  cancelticket(data:any)
  {
    return  this.http.get(this.baseUrl+'Cancel/'+data)
  }
  login(res:any)
{
  console.log(res.EmailId);

  return  this.http.get(this.baseUrl+'Login/'+res.EmailId+"/"+res.Password)
}

}
