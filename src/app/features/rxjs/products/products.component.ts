import { Component, OnInit } from '@angular/core';
import { $addToCart } from '../subject';
import { Product } from './entity/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  bgColors = ['#dad93d', '#fb7676', '#64b364', '#8282de']
  products: Array<Product> = [
    {
      id: 1,
      name: "ქუდი",
      price: 10.5,
      bgColor: this.generateColor()
    },
    {
      id: 2,
      name: "მაისური",
      price: 23,
      bgColor: this.generateColor()
    },
    {
      id: 3,
      name: "შარვალი",
      price: 45,
      bgColor: this.generateColor()
    },
    {
      id: 4,
      name: "ჟაკეტი",
      price: 90,
      bgColor: this.generateColor()
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  private generateColor() {
    return this.bgColors[Math.floor(Math.random() * 4)];
  }

  addToCart(id: number) {
    this.reloadProduct(id);

    $addToCart.next(
      this.products.find(p => p.id == id)
    );
  }

  reloadProduct(id: number) {

  }

}
