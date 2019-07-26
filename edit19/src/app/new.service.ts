import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Arrival } from './arrival';
import { HttpClient, HttpHandler } from '@angular/common/http';@Injectable({
 providedIn: 'root'
})export class NewService {  containerArrivals: Arrival[];  constructor(private http: HttpClient) { }   
getArrival():  Observable<any> {
   const obj: Observable<any> = this.http.get('http://10.242.89.19:4200');
   return obj;
 }
}