import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../rxjs/products/entity/product';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class ProductHttpService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.url + 'products', {
      observe: 'response'
    }).pipe(
      tap(response => {
        // tslint:disable-next-line:forin
        // console.log(response)
        for (const i of response.headers.keys()) {
          // console.log(i, response.headers.get(i));
        }
      }),
      map(response => response.body)
    );
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(environment.url + 'products/' + id);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(environment.url + 'products', product);
  }

  update(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(environment.url + 'products/' + id, product);
  }

  delete(id: number): Observable<number> {
    return this.http.delete<number>(environment.url + 'products/' + id, {
      headers: {
        authorization: 'ho2uh3o28fo8dsnl238'
      }
    });
  }

}
