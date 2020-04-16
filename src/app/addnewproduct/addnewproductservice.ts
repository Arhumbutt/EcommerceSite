import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import { Config } from './../Config';
import { tap } from 'rxjs/operators';
import { config } from 'rxjs';

@Injectable()
export class addproductService {
  constructor(private http: HttpClient, private _https: Http) { }
  get_token(){
    return localStorage.getItem('token')
  }

  postProduct(title , piece , cat , instock , febric , desc , price , checkgender , fileToUpload: FileList) {
    // console.log(fileToUpload)
    const formData: FormData = new FormData();
    console.log('File to upload in service is:', fileToUpload);
  
    formData.append("p_title",title);
    formData.append('p_cat', piece);
    formData.append('p_cat', cat);
    formData.append('instock', instock);
    formData.append('p_des', desc);
    formData.append('p_price', price);
    formData.append('p_gender', checkgender);
    formData.append('p_febric', febric);
    for(let i=0; i<fileToUpload.length;i++) {
      formData.append('file' , fileToUpload[i]);
    }
    console.log('formData is:', formData);
    https://ownstyle.herokuapp.com/product/check
  //  alert(localStorage.getItem('token'))
  let headers = new HttpHeaders();
    headers.append('Authorization', 'JWT ' + localStorage.getItem('token'));
   headers.append('Content-Type', 'application/json');
    return this.http.post(Config.api + 'product/check' ,formData
    // {
    //     "p_title":title,
    //     "piece":piece,
    //     "p_cat":cat,
    //     "instock":instock,
    //     "p_febric":febric,
    //     "p_des":desc ,
    //     "p_price":price,
    //     "p_gender":checkgender,
    //     "p_image":formData
         
    // }
    , { headers: headers }).pipe(
        tap(_ => {
        }, error => {
          console.log(error);
        }))
  
  }

  // this.productID ,this.form_updateproduct.value['p_Title'] , this.form_updateproduct.value['p_Description'] , this.form_updateproduct.value['p_Price'] , this.form_updateproduct.value['p_Piece'] , this.form_updateproduct.value['p_Cat'] , this.form_updateproduct.value['p_FabricType'] ,this.form_updateproduct.value['p_Stock'] , this.form_updateproduct.value['checkgender'] , this.filetoup
  updateProduct(id ,title , desc , price , piece , cat , febric, instock   , checkgender , fileToUpload: FileList) {
    // console.log(fileToUpload)
    const formData: FormData = new FormData();
    console.log('File to upload in service is:', fileToUpload);
  
    formData.append("p_title",title);
    formData.append('p_cat', piece);
    formData.append('p_cat', cat);
    formData.append('instock', instock);
    formData.append('p_des', desc);
    formData.append('p_price', price);
    formData.append('p_gender', checkgender);
    formData.append('p_febric', febric);
    for(let i=0; i<fileToUpload.length;i++) {
      formData.append('p_image' , fileToUpload[i]);
    }
    console.log('formData is:', formData);

  //  alert(localStorage.getItem('token'))
  let headers = new HttpHeaders();
    headers.append('Authorization', 'JWT ' + localStorage.getItem('token'));
   headers.append('Content-Type', 'application/json');
    return this.http.put(Config.api + 'product/product_Edit_Delete/'+id ,formData
  
    , { headers: headers }).pipe(
        tap(_ => {
        }, error => {
          console.log(error);
        }))
  
  }
  DeleteProductByid(id) {
    let headers = new HttpHeaders();
    headers.append('Authorization', 'JWT ' + localStorage.getItem('token'));
   headers.append('Content-Type', 'application/json');
    return this.http.delete(Config.api + 'product/product_Edit_Delete/' + id, { headers: headers }).pipe(
      tap(_ => {
      }, error => {
        console.log(error);
      }))  }


      ProductList() {
        // alert(localStorage.getItem('token'))
        let headers = new HttpHeaders({ 'Authorization': 'JWT '+ ( localStorage.getItem('token')) });
        headers.append('Content-Type', 'application/json');
        // let headers = new HttpHeaders();
        //   headers.append('Authorization', 'JWT ' + localStorage.getItem('token'));
        // headers.append('Content-Type', 'application/json');  
        return this.http.get(Config.api + 'product/product_post', { headers: headers }).pipe(
          tap(_ => {
          }, error => {
            console.log(error);
          }))  }
          

       getproductdetailbyid(id) {
        let headers = new HttpHeaders({ 'Authorization': 'JWT '+ ( localStorage.getItem('token')) });
        headers.append('Content-Type', 'application/json');
        // let headers = new HttpHeaders();
        //   headers.append('Authorization', 'JWT ' + localStorage.getItem('token'));
        // headers.append('Content-Type', 'application/json');  
        return this.http.get(Config.api + 'product/product_detail_page/'+ id, { headers: headers }).pipe(
          tap(_ => {
          }, error => {
            console.log(error);
          }))  }
}