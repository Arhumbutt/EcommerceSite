import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import { Config } from './../Config';
import { tap } from 'rxjs/operators';
import { config } from 'rxjs';

@Injectable()
export class filterproductService {
  constructor(private http: HttpClient, private _https: Http) { }
  get_token(){
    return localStorage.getItem('token')
  }

  filterproduct( piece , cat , febric  , minprice ,maxprice, checkgender ) {
 
  let headers = new HttpHeaders();
    headers.append('Authorization', 'JWT ' + localStorage.getItem('token'));
   headers.append('Content-Type', 'application/json');
    return this.http.post(Config.api + 'product/product_filter' ,
    {
        "piece":piece,
        "p_cat":cat,
        "p_febric":febric,
        "p_gender":checkgender,
        "min_price":minprice,
        "max_price":maxprice
         
    }
    , { headers: headers }).pipe(
        tap(_ => {
        }, error => {
          console.log(error);
        }))
  
  }

  updateProduct(id ,title , desc , price , piece , cat , febric, instock   , checkgender , fileToUpload: FileList) {
    console.log(fileToUpload)
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

    let headers = new HttpHeaders({ 'Authorization': 'JWT '+ ( localStorage.getItem('token')) });
    headers.append('Content-Type', 'application/json');
    return this.http.put(Config.api + 'product/product_Edit_Delete/'+id ,formData ,{ headers:headers }).pipe(
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