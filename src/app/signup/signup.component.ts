import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from './password-validator';
import { SignupService } from "./signup-service";
import Swal from 'sweetalert2';
// import { RecapchaService } from '../../recapcha/recapcha.service';
// import { RecapchaComponent } from 'src/app/recapcha/recapcha.component';
import { Config } from "./../Config";
// import { FacebookLoginProvider, GoogleLoginProvider,AuthService } from 'angular5-social-login';
// import { HttpService } from 'src/app/services/http.service';
// import { JwtHelper } from 'angular2-jwt'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  register: FormGroup;
  emailonly = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  usernameOnly = '[a-zA-Z0-9_.]+';
  isequal;
  hide = true;
  hide1 = true;
  model
  password_regex = '^(?=.*?[A-Za-z0-9\/\\\!\"#$%&()*+,£^.:;=?\\\\[\\]\\-\'<>~|@_{}]).{8,}$';
  constructor(private _http: HttpClient,  private fb: FormBuilder, private serv_:SignupService,
    private router: Router, ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.register = this.fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.pattern(this.usernameOnly), Validators.minLength(3)])],
      'email': ['', Validators.compose([Validators.required, Validators.pattern(this.emailonly), Validators.email])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern(this.password_regex)])],
      'Fname': ['', Validators.compose([Validators.required]),Validators.minLength(2)],
      'Lname': ['', Validators.compose([Validators.required]), Validators.minLength(2)],
      'confirmpassword': ['', Validators.compose([Validators.required, Validators.pattern(this.password_regex)])],
    },
    {
      validator: PasswordValidation.MatchPassword // your validation method
    });
  }
  invalid = false;
  password
  confirmpassword
  username
  email
  invaliduser:boolean
  onChange(event: any): void {
    if(this.register.controls.password != this.register.controls.confirmpassword){
      this.invalid = true
    } else {
      this.invalid = false
    }
  }
  usernameCheck() {
    this._http.get(Config.api + 'User/' +this.username +'/Verify/Username/' ).subscribe(data => {
      if (data['Res'] === true) {
        this.invaliduser = true
      } else {
        this.invaliduser = false
      }
    })
  }
  useremailCheck() {
    this._http.post(Config.api + 'User/Email/',{
      "email": this.email,
    }).subscribe(data => {
      if (data['Res'] === true) {
        this.invaliduser = true
      } else {
        this.invaliduser = false
      }
    })
  }
  onRegister() {
    // if (this.recapcha.check()) {
      this.isequal = true;
      this.serv_.register(this.register.value).subscribe(
        data => {
          // Swal.fire({
          //   type: 'success',
          //   title: 'Please check your email for account activation instructions',
          //   showConfirmButton: true,
          //   width: '512px',
          // });
          this.router.navigate(['login']);
        },
        error => {
        });
    // } 
    // else {
      // this.captcha.resetImg();
      this.isequal = false;
      // Swal.fire({
      //   type: 'error',
      //   title: 'Please confirm that you are not a robot',
      //   showConfirmButton: false,
      //   width: '512px',
      //   timer: 2000
      // });
    // }
  }

}
