import { Title } from '@angular/platform-browser';
import { CartCountService, CartCountServicefactory } from './../../features/cart-count-.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [{
    provide: CartCountService,
    useFactory: CartCountServicefactory,
    deps: [Title]
  }]
})
export class LayoutComponent implements OnInit {
  productsCount: Observable<number> | undefined;

  constructor(private cartCountService: CartCountService) { }

  ngOnInit(): void {
    this.productsCount = this.cartCountService.$countInCart;
    this.cartCountService.next(2);
  }

}

export function s() {
  console.log('nexted')
}
