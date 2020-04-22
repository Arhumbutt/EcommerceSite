import { Component, OnInit } from '@angular/core';
import { filterproductService } from "./filterproductservice";
import { Router, ActivatedRoute } from '@angular/router';
import { headerService } from "./../header/headerservice";
declare var $: any;
@Component({
  selector: 'app-filterbycategory',
  templateUrl: './filterbycategory.component.html',
  styleUrls: ['./filterbycategory.component.scss']
})
export class FilterbycategoryComponent implements OnInit {

  filteredproduct:any=[]
  sub
  gender
  type
  piece
  cat
  minprice
  maxprice
  constructor(private serv : filterproductService ,private router:Router, private route:ActivatedRoute ,private serv1 :headerService,) { }


  grid(){
    $('.grid-view').show();
    $('.list-view').hide();
  }
  list(){
    $('.list-view').show();
    $('.grid-view').hide();
  }


  ngOnInit() {
    
    window.scroll(0,0)
    this.sub = this.route.queryParams.subscribe(params => {   
      if(params['param1'] =='1')
      {
        this.gender='Women'
      }
      else if(params['param1'] =='2')
      {
        this.gender='Men'
      }
      this.gender=params['param1'],
      this.type=params['param2'],
      this.piece=params['param3']
      if(this.gender !='' || this.type !='' ||this.piece !='')
      {
        this.filterproduct( this.piece ,this.cat,this.type ,this.gender)
      }
    })
  }
  filterproduct(piece , cat , febric , checkgender)
  {
   
         this.serv.filterproduct(piece , cat , febric  , this.minprice ,this.maxprice, checkgender).subscribe(data=>{
          this.filteredproduct=data
          console.log(data)
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
  AddtoCartList(id)
  {

    this.serv1.addtocartlist(id , 1).subscribe(data=>{
     console.log(data)
    })
  }


}
