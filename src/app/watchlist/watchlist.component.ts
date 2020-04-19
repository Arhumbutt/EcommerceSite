import { Component, OnInit } from '@angular/core';
import { headerService } from "./../header/headerservice";

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  watchlistArray:any=[]
  constructor(private serv:headerService) { }

  ngOnInit() {
    this.GetWatchList()
  }
  GetWatchList()
  {
    this.serv.getwatchlist().subscribe(data=>{
      console.log(data)
      this.watchlistArray=data

    })
  }
}
