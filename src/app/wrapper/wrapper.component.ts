import { Component, OnInit } from '@angular/core';
import { CartCountService } from '../features/cart-count-.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
