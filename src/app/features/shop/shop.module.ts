import { CartComponent } from './../cart/cart.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductComponent } from '../shared/product/product.component';
import { ProductsComponent } from '../products/products.component';
import { ProductListItemComponent } from '../products/product-list-item/product-list-item.component';

@NgModule({
  declarations: [
    ShopComponent,
    CartComponent,
    ProductsComponent,
    ProductComponent,
    ProductListItemComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ShopModule { }
