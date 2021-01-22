import {ChangeDetectorRef, Component, OnInit, PipeTransform} from '@angular/core';
import {$addToCart} from '../subject';
import {Product} from './entity/product';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {async, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private _products: Product[];
  products: Observable<Product[]>;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.products = this.http.get<Product[]>(environment.url + 'products')
      .pipe(
        tap(products => this._products = products),
      );
  }

  addToCart(id: number) {
    $addToCart.next(
      this._products.find(p => p.id == id)
    );
  }

}
