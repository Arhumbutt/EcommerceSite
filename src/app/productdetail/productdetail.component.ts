import { Component, OnInit } from '@angular/core';
import { addproductService } from "./../addnewproduct/addnewproductservice";
import { headerService } from "./../header/headerservice";
declare var $:any;
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
  productdetail_array:any=[]
  qty=1
  constructor(  private serv1 :headerService,  private serv:addproductService) { }

  ngOnInit() {
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: '<i class="fa fa-angle-right slide-r"></i>',
      prevArrow: '<i class="fa fa-angle-left slide-l"></i>'
    });

    this.GetProductDetail()

  }

    GetProductDetail()
    {

      this.serv.getproductdetailbyid(1).subscribe(data=>{
       this.productdetail_array=data['Result']
       this.productdetail_array.product_title
       this.productdetail_array.In_Stock
       this.productdetail_array.product_category
       this.productdetail_array.product_fabric
       this.productdetail_array.product_description
       this.productdetail_array.product_price
       this.productdetail_array.product_title
       this.productdetail_array.product_gender
       this.productdetail_array.product_image
       console.log(data)
      })
    }
    AddtoWatchList()
    {

      this.serv1.addtowatchlist(1).subscribe(data=>{
       console.log(data)
      })
    }
    AddtoCartList()
    {

      this.serv1.addtocartlist(1 , this.qty).subscribe(data=>{
       console.log(data)
      })
    }

}
