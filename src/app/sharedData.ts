import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { headerService } from "./../../src/app/header/headerservice";

@Injectable()
export class SharedData {

    watchtotalSubject = new BehaviorSubject<any>('');
    watchMessagetotal = this.watchtotalSubject.asObservable();
    
    carttotalSubject = new BehaviorSubject<any>('');
    cartMessagetotal = this.carttotalSubject.asObservable();

    cartlistArrayShared = new BehaviorSubject<any>('');
    cartlistArrayTotal = this.cartlistArrayShared.asObservable();

    watchlistArrayShared = new BehaviorSubject<any>('');
    watchlistArrayTotal = this.watchlistArrayShared.asObservable();
  
    constructor(private _servHeader:headerService) {
  
    }

    getcartlistValue(meassage)
    {
      this.cartlistArrayShared.next(meassage)
      console.log(this.cartlistArrayShared,'sharedList array')
    }
    
    carttotal(message) {
      this.carttotalSubject.next(message)
      console.log(this.carttotalSubject,'shared carttotal')
    }
    watchtotal(message) {
      this.watchtotalSubject.next(message)
      console.log(this.watchtotalSubject,'shared')
    }
    getwatchlistValue(meassage){
      this.watchlistArrayShared.next(meassage)
      console.log(this.watchlistArrayShared,'sharedList array')
    }
    
}