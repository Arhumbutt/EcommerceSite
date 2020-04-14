import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import { Config } from './../Config';
import { tap } from 'rxjs/operators';

@Injectable()
export class addproductService {
  constructor(private http: HttpClient, private _https: Http) { }
  get_token(){
    return localStorage.getItem('token')
  }

  postProduct(title , piece , cat , instock , febric , desc , price , checkgender , img) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT ' + (localStorage.getItem('token')));
    return this._https.post(Config.api + 'product/product_post' ,
    JSON.stringify({
        "p_title":title,
        "piece":piece,
        "p_cat":cat,
        "instock":instock,
        "p_febric":febric,
        "p_des":desc ,
        "p_price":price,
        "p_gender":checkgender,
        "p_image":img
         
    }), { headers: headers }).pipe(
        tap(_ => {
        }, error => {
          console.log(error);
        }))
  
  }
}