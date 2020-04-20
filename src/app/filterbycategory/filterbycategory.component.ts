import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-filterbycategory',
  templateUrl: './filterbycategory.component.html',
  styleUrls: ['./filterbycategory.component.scss']
})
export class FilterbycategoryComponent implements OnInit {

  constructor() { }


  grid(){
    $('.grid-view').show();
    $('.list-view').hide();
  }
  list(){
    $('.list-view').show();
    $('.grid-view').hide();
  }


  ngOnInit() {
  }

}
