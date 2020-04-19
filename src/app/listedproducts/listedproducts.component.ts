import { Component, OnInit } from '@angular/core';
import { addproductService } from "./../addnewproduct/addnewproductservice";
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms'
@Component({
  selector: 'app-listedproducts',
  templateUrl: './listedproducts.component.html',
  styleUrls: ['./listedproducts.component.scss']
})
export class ListedproductsComponent implements OnInit {

  title
  piece
   cat
    instock
    febric
     desc
      price
       checkgender
  filetoup:any = [];
  ProductList_array:any=[]
  ProductDetailList_array:any=[] 
  value
  gender_value1
  gender_value2
  productID
  
  constructor(private serv:addproductService) { }

  ngOnInit() {
    this._AllProduct()
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
  form_updateproduct = new FormGroup ({
      
    p_Title: new FormControl ('', Validators.compose([Validators.required])),
    p_Description:new FormControl ('', Validators.compose([Validators.required])),
    p_Price:new FormControl ('', Validators.compose([Validators.required])),
    p_Piece:new FormControl ('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-Z _.]+$')])),
    p_Cat:new FormControl ('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-Z _.]+$')])),
    p_FabricType:new FormControl ('', Validators.compose([Validators.required])),
    p_Stock:new FormControl ('', Validators.compose([Validators.required])),
    // p_Price:new FormControl ('', Validators.compose([Validators.required])),
    // mobileno1:new FormControl ('', Validators.compose([Validators.required])),
    // pic1:new FormControl ('', Validators.compose([Validators.required])),
    // companypic1:new FormControl ('', Validators.compose([Validators.required])),
  });

  _GetProductDetailByID(id)
  {
   this.productID=id 
    this.serv.getproductdetailbyid(id).subscribe(data=>
      {
        this.ProductDetailList_array=data['Result']
        this.ProductDetailList_array.product_image
        this.ProductDetailList_array.product_title
        this.ProductDetailList_array.product_piece
        if(this.ProductDetailList_array.In_Stock == true)
        {
          this.value=1
        }
        else
        {
          this.value=0

        }
        this.ProductDetailList_array.product_category
        this.ProductDetailList_array.product_fabric
        this.ProductDetailList_array.product_description
        this.ProductDetailList_array.product_price
        this.ProductDetailList_array.product_gender 
        
      })
      
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

  _UpdateProduct()
  {
   this.serv.updateProduct(this.productID ,this.form_updateproduct.value['p_Title'] , this.form_updateproduct.value['p_Description'] , this.form_updateproduct.value['p_Price'] , this.form_updateproduct.value['p_Piece'] , this.form_updateproduct.value['p_Cat'] , this.form_updateproduct.value['p_FabricType'] ,this.form_updateproduct.value['p_Stock'] , this.ProductDetailList_array.product_gender , this.ProductDetailList_array.product_image).subscribe(
     data => {
       this. _AllProduct()
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
  DeleteBid(id) {
    this.serv.DeleteProductByid(id).subscribe(data => {
     
      //  swal.fire('Bid Deleted SuccessFully');
      this.  _AllProduct()
    }, error => {

    });
}
  _AllProduct()
  {

   this.serv.ProductList().subscribe(
     data => {
       this.ProductList_array=data
           
     console.log(data)
     },
     error => {
     });
 
  }
  
}
