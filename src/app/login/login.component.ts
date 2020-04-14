import { Component, OnInit, ViewChild } from '@angular/core';
// import { HttpService } from 'src/app/services/http.service';
// import { RecapchaComponent } from 'src/app/recapcha/recapcha.component';
// import { RecapchaService } from 'src/app/recapcha/recapcha.service';
import Swal from 'sweetalert2';
import { LoginService } from "./login_service";
// import { SimpleGlobal } from 'ng2-simple-global';
// import { FacebookLoginProvider, GoogleLoginProvider,AuthService } from 'angular5-social-login';
// import { JwtHelper } from 'angular2-jwt';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _http: HttpClient,private router: Router, private _nav: Router , private _serv:LoginService) { }
  
  model
  username
  password
  ngOnInit() {
  }
  onLogin() {
      // this._http.IsActive(auth).subscribe(res =>{      
      this._serv.login(this.username,this.password).subscribe(
      res => {
        
        localStorage.setItem('token',res['token']);
        localStorage.getItem('token');
        console.log(res['token'])
        this._serv.checkRole().subscribe(
          res=>{
            if(res['msg'] =='Admin')
            {
              this._nav.navigate(['/admindashboard'])
            }
            else
            {
              this._nav.navigate(['/userdashboard'])
            }
          }
        )
        // localStorage.setItem('token', data.token);
        // localStorage.setItem('user','yes')
        // localStorage.setItem('username', this.model.username);
        // this.gv['login']=true
        // Swal.fire({
        //   type: 'success',
        //   title:  'Welcome to KingBestMall - The Ecommerce Shopping Universe.',
        //   showConfirmButton: false,
        //   timer: 2500, width: '512px',
        // })

        // if( res.Role === 'S'){
        //   this._nav.navigate(['/user-dashboard'])
        //   localStorage.setItem('Role','S')
        // }
        // else if (res.Role === 'U'){
        //   this._nav.navigate(['/'])
        //   localStorage.setItem('Role','U')
        // }
      })
    // }
    //  ,
    // error => {
    //   if (error.status == 404){
    //     Swal.fire({
    //       type: 'error',
    //       title: 'Username or Password is wrong',
    //       showConfirmButton: true,
    //     })
    //   }
    //   else if(error.status == 400){
    //     Swal.fire({
    //       type: 'error',
    //       title: 'Your Account is Inactive',
    //       showConfirmButton: true,
    //     })
    //   }
    //   else if(error.status == 500){
    //     Swal.fire({
    //       type: 'error',
    //       title: 'Your Account is Inactive',
    //       showConfirmButton: true,
    //     })
    //   }
    // }
  
}

}
