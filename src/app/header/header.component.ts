import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headerService } from "./headerservice";
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private serv:headerService , private router: Router) { }
   categories:any=[]
   currentuser
   watchlistArray:any=[]
   totalResults
  ngOnInit() {
     this.currentuser=localStorage.getItem('token')
     this.GetWatchList()
  }

   GetWatchList()
   {
     this.serv.getwatchlist().subscribe(data=>{
       console.log(data)
       this.watchlistArray=data
       this.totalResults=data['Total_Result']

     })
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
   navigatetofilterproduct(gender ,type ,piece)
   {
    this.router.navigate(['/filterbycategory'], {
      queryParams: {
        'param1': gender,
        'param2': type, 
        'param3':piece
      }
     })
   }
   navigatetoproductdetail(id)
   {
     
    this.router.navigate(['/productdetail'], {
      queryParams: {
        product_id:id
      }
     })
   }
   get_show_menu(){
    if (localStorage.getItem('user') == 'yes'){
      this.router.navigate(['/user-dashboard']);
    }
    else if (localStorage.getItem('user') == null){
      this.router.navigate(['/login']);
    }
  }
   


}
