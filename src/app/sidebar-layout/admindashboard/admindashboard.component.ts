import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  logout(){
 
  
    // localStorage.removeItem('currentUser');
    // localStorage.removeItem('localtoken');
    // Swal.fire({
    //   type: 'success',
    //   title: 'You are successfully Logged Out from KingBestMall',
    //   showConfirmButton: false,
    //   timer: 2500, width: '512px',
    // })
    localStorage.removeItem('token');
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/']);
    // this.loggedin=false
  }
}
