import { Product } from '../../features/rxjs/products/entity/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {};

  constructor() { }

  ngOnInit(): void {
    // console.log(this.product)
  }

}
