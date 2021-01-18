import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { until } from 'protractor';
import { of, Subject, Subscription } from 'rxjs';
import { map, mergeMap, reduce, scan, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Product } from '../products/entity/product';
import { $addToCart, $productCountInCart, $removeFromCart } from '../shop/subject';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  TotalAmount = 0;
  products: Array<Product> = [];
  sub: Subscription | undefined;

  private readonly $destroy = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.sub = $addToCart.pipe(
        takeUntil(this.$destroy),
        map(product => {
          this.products.push(product);
          return product.price;
        }),
        scan(
          (acc, value) => {
            console.log(value);
            return acc + value!;
          }, 0),
        tap((value) => {
          console.log(value);
          this.TotalAmount = value
        }),
        tap(() => {
          $productCountInCart.next(this.products.length);
        })
      ).subscribe();
  }

  removeProduct(id: number) {
    $removeFromCart.next(this.products.find(p => p.id == id));
    this.products = this.products.filter(p => p.id != id);
  }

  ngOnDestroy(): void {
    this.$destroy.complete();
  }
}
