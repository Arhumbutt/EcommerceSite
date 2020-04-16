import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: '<i class="fa fa-angle-right slide-r"></i>',
      prevArrow: '<i class="fa fa-angle-left slide-l"></i>'
    });




  }

}
