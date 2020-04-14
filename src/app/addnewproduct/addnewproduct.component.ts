import { Component, OnInit } from '@angular/core';
import { addproductService } from "./addnewproductservice";
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
// import swal from 'sweet2';
@Component({
  selector: 'app-addnewproduct',
  templateUrl: './addnewproduct.component.html',
  styleUrls: ['./addnewproduct.component.scss']
})
export class AddnewproductComponent implements OnInit {
  title
   piece
    cat
     instock
     febric
      desc
       price
        checkgender
   img
  constructor(private _serv:addproductService) { }
  // https://ownstyle.herokuapp.com/product/product_post
   

  ngOnInit() {
  }
  selectfabrictype = [
    { type: 'Cotton', value: 'Cotton' },
    { type: 'Lawn', value: 'Lawn' },
    { type: 'Wool', value: 'Wool' }
  ];
  selectcategory = [
    { type: 'Stiched', value: 'Stiched' },
    { type: 'Un-Stiched', value: 'UnStiched' },
    { type: 'Shawl', value: 'Shawl' }
  ];
  selectpiece = [
    { type: '3 Piece', value: '3 Piece' },
    { type: '2 Piece', value: '2 Piece' },
    { type: '1 Piece', value: '1 Piece' }
  ];
  InStock(value)
  {
    
    if(value=='1')
    {
      this.instock='true'
    }
    else
    {
      this.instock='false'
    }
  }
  getValueFabricType(e)
  {
   
    this.febric=e
  }
  getValueProductCategory(e)
  {
    
    this.cat=e    
  }
  getValuePiece(e)
  {
    
    this.piece=e
  }
  gender(value)
  {
    
    if(value=='1')
    {
      this.checkgender='W'
    }
    else if(value=='2')
    {
      this.checkgender='M'
    }
  }
   _AddNewproduct()
   {
 
    this._serv.postProduct(this.title , this.piece , this.cat , this.instock , this.febric , this.desc ,this.price , this.checkgender , this.img).subscribe(
      data => {
        // swal.fire({
        //   type: 'success',
        //   title: 'Products are Save',
        //   showConfirmButton: true,
        //   width: '512px',
        // });
        // this.router.navigate(['login']);
      },
      error => {
      });
  
   }
}
