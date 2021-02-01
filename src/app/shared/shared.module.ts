import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import {ProductComponent} from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, ProductComponent],
  exports: [
    LayoutComponent, ProductComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  ]
})
export class SharedModule { }
