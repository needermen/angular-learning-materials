import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { $productCountInCart } from 'src/app/features/shop/subject';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  productsCount: Observable<number> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.productsCount = $productCountInCart;
  }

}
