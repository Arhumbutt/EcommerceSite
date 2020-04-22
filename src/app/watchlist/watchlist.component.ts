import { Component, OnInit } from '@angular/core';
import { headerService } from "./../header/headerservice";

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  watchlistArray:any=[]
  constructor(private serv:headerService , private router : Router) { }

  ngOnInit() {
    this.GetWatchList()
  }
  navigatetoproductdetail(id)
  {
   this.router.navigate(['/productdetail'], {
     queryParams: {
       product_id:id
     }
    })
  }
  GetWatchList()
  {
    this.serv.getwatchlist().subscribe(data=>{
      console.log(data)
      this.watchlistArray=data

    })
  }
}
