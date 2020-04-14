import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { Observable, config } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Config } from "./../config";
import { Headers, Http, Response ,  } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient ,private Config:Config)  {

  }
 
  get_token(){
    return localStorage.getItem('token')
  }


//   GetAllCategories(): Observable<any> {
//     return this.http.get(this.baseUrl + 'Category/').pipe(
//         tap(_ => {
//         }, error => {
//           console.log(error);
//         })
//       );
//   }
//   GetAllCategories_sub(id): Observable<any> {
//     return this.http.get( 'https://apis.kingbestmall.com/'+id+'/List/SubCategory/').pipe(
//         tap(_ => {
//         }, error => {
//           console.log(error);
//         })
//       );
//   }

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
        // headers.append('Content-Type', 'application/json');
        // headers.append('Authentication', 'JWT ' + (localStorage.getItem('token')));
        return this.http.get(Config.api + 'product/Check_Role', {headers:headers}).pipe(
            tap(_ => {
            }, error => {
              console.log("heelo")
              console.log(error);
            }))
      }
     // User Login APi
    //  IsActive(auth): Observable<any> {
    //   const s = this.http.post(this.loginUrl + 'User/IsActive/', auth)
    //     .pipe(
    //       tap(_ => {
    //       }, error => {
    //         console.log(error)
    //       })
    //     );
    //   return s;
    // }
    
// User Login APi
//   register(auth): Observable<any> {
//   const s = this.http.post(this.userUrl + 'SignUp/', auth)
//     .pipe(
//       tap(_ => {
//       }, error => {
//         console.log(error)
//       })
//     );
//   return s;
// }
// User Login APi
// Add_new_product(auth1 ): Observable<any> {
//   //  let auth =auth1+auth2+auth3
//   let headers = new HttpHeaders();
//   headers.append('Content-Type', 'application/json');
//   headers = new HttpHeaders({ 'Authorization': 'JWT ' + ( localStorage.getItem('token')) });
//   const s = this.http.post(this.loginUrl + 'Product/', auth1,{headers:headers} )
//     .pipe(
//       tap(_ => {
//       }, error => {
//         console.log(error)
//       })
//     );
//   return s;
// }
//gget images
// images(input_file): Observable<any> {
//   //  let auth =auth1+auth2+auth3
//   console.log(input_file)
//   let uth ={
//     "input_file":input_file 
//   }
//   const s = this.http.post(this.loginUrl + 'picupload',uth )
//     .pipe(
//       tap(_ => {
//       }, error => {
//         console.log(error)
//       })
//     );
//   return s;
// }
 
//change password
// changepassword(uth): Observable<any> {
//   let headers = new HttpHeaders();
//   headers.append('Content-Type', 'application/json');
//   headers = new HttpHeaders({ 'Authorization': 'JWT ' + ( localStorage.getItem('token')) });
//   const s = this.http.put(this.userUrl + 'ChangePassword/',uth , {headers:headers} )
//     .pipe(
//       tap(_ => {
//       }, error => {
//         console.log(error)
//       })
//     );
//   return s;

// }
// /User/ChangePassword/
// User verfiy  APi
// UserConfirm(auth): Observable<any> {
//   const s = this.http.post(this.userUrl +'EmailConfirm/', auth)
//     .pipe(
//       tap(_ => {
//       }, error => {
//         console.log(error)
//       })
//     );
//   return s;
// }
changepass( currPass: string, pass1: string, pass2: string) {

  // return this.http.post(this.userUrl + 'ChangePassword', {
  //   // 'email': username,
  //   'current': currPass,
  //   'pass1': pass1,
  //   'pass2': pass2
  // })  
}


}
