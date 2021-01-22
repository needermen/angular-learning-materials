import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../entity/product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input() product: Product = {};
  @Output() added: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }



  addToCart() {
    this.added.emit(this.product.id);
  }

}
