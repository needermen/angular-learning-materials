import { CartCountService } from '../../cart-count-.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Subject, Subscription } from 'rxjs';
import { map, scan, takeUntil, tap, reduce } from 'rxjs/operators';
import { Product } from '../products/entity/product';
import { $addToCart, $removeFromCart } from '../subject';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  TotalAmount = 0;
  products: Array<Product> = [];
  sub: Subscription | undefined;

  private readonly $destroy = new Subject();

  constructor(private cartCountService: CartCountService) { }

  ngOnInit(): void {
    this.sub = $addToCart.pipe(
      takeUntil(this.$destroy),
      map(product => {
        this.products.push(product);
        return product.price;
      }),
      tap((value) => {
        this.TotalAmount = this.TotalAmount + value
      }),
      tap((value) => {
        this.cartCountService.next(this.products.length);
      })
    ).subscribe();

    from([1, 2, 3, 4, 5, 56, 6, 7, 78, 8, 89, 9, 5, 4, 4])
      .pipe(
        map(() => 0),
        reduce(
          (acc, value) => {
            return acc + value!;
          }, 0)).subscribe((value) => {
            // console.log(value);
          })
  }

  removeProduct(id: number) {
    $removeFromCart.next(this.products.find(p => p.id == id));
    this.products = this.products.filter(p => p.id != id);
    this.cartCountService.next(this.products.length)
  }

  increase() {
  }

  ngOnDestroy(): void {
    this.$destroy.complete();
  }
}
