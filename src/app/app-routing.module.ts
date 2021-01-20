import { ShopComponent } from './features/shop/shop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCompComponent } from './form-comp/form-comp.component';

const routes: Routes = [
  {
    path: "", redirectTo: "shop", pathMatch: 'full'
  },
  {
    path: "shop", component: ShopComponent
  },
  {
    path: "form", component: FormCompComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
