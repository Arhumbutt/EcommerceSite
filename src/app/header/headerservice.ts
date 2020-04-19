import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import { Config } from './../Config';
import { tap } from 'rxjs/operators';
import { config } from 'rxjs';

@Injectable()
export class headerService {
  constructor(private http: HttpClient, private _https: Http) { }
  get_token(){
    return localStorage.getItem('token')
  }
  getwatchlist() {
    let headers = new HttpHeaders({ 'Authorization': 'JWT '+ ( localStorage.getItem('token')) });
    headers.append('Content-Type', 'application/json');
    // let headers = new HttpHeaders();
    //   headers.append('Authorization', 'JWT ' + localStorage.getItem('token'));
    // headers.append('Content-Type', 'application/json');  
    return this.http.get(Config.api + 'product/watchlist_get_post', { headers: headers }).pipe(
      tap(_ => {
      }, error => {
        console.log(error);
      }))  }

      addtowatchlist(productid) {
        let headers = new HttpHeaders({ 'Authorization': 'JWT '+ ( localStorage.getItem('token')) });
        headers.append('Content-Type', 'application/json');
        // let headers = new HttpHeaders();
        //   headers.append('Authorization', 'JWT ' + localStorage.getItem('token'));
        // headers.append('Content-Type', 'application/json');  
        return this.http.post(Config.api + 'product/watchlist_get_post',{
          product:productid
        }, { headers: headers }).pipe(
          tap(_ => {
          }, error => {
            console.log(error);
          }))  
        }

      getcartlist() {
        let headers = new HttpHeaders({ 'Authorization': 'JWT '+ ( localStorage.getItem('token')) });
        headers.append('Content-Type', 'application/json');
        // let headers = new HttpHeaders();
        //   headers.append('Authorization', 'JWT ' + localStorage.getItem('token'));
        // headers.append('Content-Type', 'application/json');  
        return this.http.get(Config.api + 'product/cartlist_get_post', { headers: headers }).pipe(
          tap(_ => {
          }, error => {
            console.log(error);
          }))  
        }
        addtocartlist(cartproductid , qty) {
          let headers = new HttpHeaders({ 'Authorization': 'JWT '+ ( localStorage.getItem('token')) });
          headers.append('Content-Type', 'application/json');
          // let headers = new HttpHeaders();
          //   headers.append('Authorization', 'JWT ' + localStorage.getItem('token'));
          // headers.append('Content-Type', 'application/json');  
          return this.http.post(Config.api + 'product/products_checkout_get_post',{
            product_id:cartproductid,
            qty:qty

          }, { headers: headers }).pipe(
            tap(_ => {
            }, error => {
              console.log(error);
            }))  
          }
         
}