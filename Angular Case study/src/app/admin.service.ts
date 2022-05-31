import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
 
baseUrl: string ='http://localhost:5900/';
  constructor(private http: HttpClient ) {}
  listUsers(){
   return  this.http.get(this.baseUrl+'GetFlightDetails')
}
listAirline()
{
  return this.http.get(this.baseUrl+'GetAirline')
}
addFlight(flightObj:any){
  return this.http.post(this.baseUrl+'AddFlight',flightObj)
}
addAirline(flightObj:any)
{
  return this.http.post(this.baseUrl+'Addairline',flightObj)
}
blockFlight(flightObj:any){
  return this.http.get(this.baseUrl+'api/BlockAirline/'+flightObj)
}
registerUser(flightObj:any){
  return this.http.post(this.baseUrl+'AddUser/',flightObj)
}
}