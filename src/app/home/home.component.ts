import { Component, OnInit } from '@angular/core';
declare var $:any; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }

}
