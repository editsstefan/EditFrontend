import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class TokenService {  tokenUrl: string = "http://10.242.89.145:8081/v1/authentication/user";
body: any = {
  "password": "kapua-password",
  "username": "kapua-sys"
}
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
   })
};  constructor(private http: HttpClient) { }
     getToken(): Observable <any>{
     const obj:Observable<any> = this.http.post<any>(this.tokenUrl,this.body,this.httpOptions);
     return obj;
   }
}