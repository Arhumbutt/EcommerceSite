import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
   categories:any=[]
  ngOnInit() {

  }
  mouseEnterCat() {
      this.categories = ['Men' ,'Women']
  }

}
