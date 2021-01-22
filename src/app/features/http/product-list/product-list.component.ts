import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Product} from '../../rxjs/products/entity/product';
import {concatMap, delay, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {from} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  constructor(private  http: HttpClient) {
  }

  ngOnInit(): void {
    this.http
      .get<Product[]>(environment.url + 'products')
      .pipe(
        (tap(products => console.log(products))),
        switchMap(products => from(products)),
        concatMap(product => {
          return this.http.get<any[]>(environment.url + 'comments')
            .pipe(
              map(comments => {
                return {
                  ...product,
                  comments: comments.filter(c => c.productId === product.id || c.postId === product.id)
                } as Product;
              }),
              delay(Math.random() * 1000)
            );
        }),
        (tap(product => console.log(product))),
      ).subscribe();
  }

}
