import { ShopComponent } from './features/rxjs/shop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCompComponent } from './form-comp/form-comp.component';
import { ProductListComponent } from './features/http/product-list/product-list.component';

const routes: Routes = [
  {
    path: "", redirectTo: "rxjs", pathMatch: 'full'
  },
  {
    path: "rxjs", component: ShopComponent
  },
  {
    path: "form", component: FormCompComponent
  },
  {
    path: "http", component: ProductListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
