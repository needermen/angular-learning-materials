import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import {ProductComponent} from './product/product.component';



@NgModule({
  declarations: [LayoutComponent, ProductComponent],
  exports: [
    LayoutComponent, ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
  ]
})
export class SharedModule { }
