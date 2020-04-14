import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginService } from "./login_service";
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
          })
      })
  
}

}
