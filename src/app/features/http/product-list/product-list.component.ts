import {Component, OnInit} from '@angular/core';
import {Product} from '../../rxjs/products/entity/product';
import {catchError, map, mergeMap, retry, switchMap, tap, toArray} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ProductHttpService} from './product-http.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  formGroup: FormGroup;

  createOrEditMode: boolean;
  updateMode = 0;

  private _products: Product[];
  public products: Observable<Product[]>;

  constructor(private productHttpService: ProductHttpService, private fb: FormBuilder, private http: HttpClient) {

  }

  reload() {
    this.products = this.productHttpService.get().pipe(
      tap(products => this._products = products)
    );
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [''],
      bgColor: [''],
      price: ['']
    });

    // this.reload();

    this.testRxjs();
  }

  createOrUpdate() {
    if (this.updateMode > 0) {
      this.productHttpService.update(this.updateMode, {...this.formGroup.getRawValue(), id: this.updateMode})
        .pipe(
          tap(() => this.createOrEditMode = false),
          tap(() => alert('ოპერაცია შესრულდა წარმატებით')),
          tap(() => this.updateMode = 0),
          tap(() => this.formGroup.reset()),
          tap(() => this.reload()),
        ).subscribe();
    } else {
      this.productHttpService.create(this.formGroup.getRawValue())
        .pipe(
          tap(() => this.reload()),
          tap(() => this.createOrEditMode = false)
        ).subscribe();
    }
  }

  select(id: number) {
    this.productHttpService.getById(id)
      .pipe(
        tap(product => this.formGroup.patchValue(product)),
        tap(product => this.createOrEditMode = true),
        tap(product => this.updateMode = product.id)
      ).subscribe();
  }

  delete(id: number) {
    this.productHttpService.delete(id)
      .pipe(
        retry(3),
        catchError((error) => {
          const httpError = error as HttpErrorResponse;
          if (httpError.status === 404) {
            alert('404 not found');
          }
          return error;
        }),
        tap(() => alert('ოპერაცია შესრულდა წარმატებით')),
        tap(() => this.reload()),
      ).subscribe();
  }

  testRxjs() {
    this.products = this.productHttpService.get()
      .pipe(
        (tap(products => console.log(products))),
        switchMap(products => products),
        (tap(product => console.log(product))),
        mergeMap(product => {
          return this.http.get<any[]>(environment.url + 'comments')
            .pipe(
              map(comments => {
                return {
                  ...product,
                  comments: comments.filter(c => c.productId === product.id)
                } as Product;
              }),
              // delay(Math.random() * 1000)
            );
        }),
        (tap(product => console.log(product))),
        toArray()
      );

  }


}

