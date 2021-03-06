import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Config } from "./../config";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) {

  }

// User Signup APi
  register(fname , lname , email , username ,password ) {
    return this.http.post(Config.api +'product/Register_user', {
       "firstname":fname,
      "lastname":lname,
      "email":email,
      "username":username,
      "password":password,
      "role":"U"

  })
    .pipe(
      tap(_ => {
      }, error => {
        console.log(error)
      })
    );
}

}
