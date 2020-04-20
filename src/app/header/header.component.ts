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
   


}
