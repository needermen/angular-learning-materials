import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCountService {
  private $productCountInCart = new Subject<number>();
  $countInCart = this.$productCountInCart.asObservable();

  constructor() {
    // console.log('created');
  }

  next(count: number) {
    this.$productCountInCart.next(count);
  }
}


export const CartCountServicefactory = (title: Title) => {
  return new CartCountService();
}
