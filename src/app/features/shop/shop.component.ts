import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { map, filter, catchError, finalize, tap, delay, switchMap, concatMap, retry } from 'rxjs/operators'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  constructor(private htpClient: HttpClient) { }

  ngOnInit(): void {
    // let obs = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    // let piped = obs.pipe(
    //   retry(1),
    //   // concatMap((value) => of(value).pipe(delay(2000))),
    //   filter(value => value % 2 == 0),
    //   tap(value => console.log(value)),
    //   catchError((err) => {
    //     console.log('error occured');
    //     return err;
    //   }),
    //   finalize(() => { console.log('completed') })
    // );

    this.htpClient.get("https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR")
      .subscribe(value => {
        // console.log(value)
      });

  }
}
