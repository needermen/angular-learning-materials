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
  }
}
