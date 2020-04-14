import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Config } from "./../config";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient ,private Config:Config)  {

  }
 
  get_token(){
    return localStorage.getItem('token')
  }

    // User Login APi
    login(username , password) {
 
        return this.http.post(Config.api +'user-token-auth/',
          {
                
          "username": username,
          "password": password,

          }).pipe(
            tap(_ => {
            }, error => {
              console.log("heelo")
              console.log(error);
            }))
      }
      
      checkRole() {
        let headers = new HttpHeaders({ 'Authorization': 'JWT '+ ( localStorage.getItem('token')) });
        headers.append('Content-Type', 'application/json');
        return this.http.get(Config.api + 'product/Check_Role', {headers:headers}).pipe(
            tap(_ => {
            }, error => {
            }))
      }


}
