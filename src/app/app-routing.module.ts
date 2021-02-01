import { ShopComponent } from './features/rxjs/shop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCompComponent } from './features/form-comp/form-comp.component';
import { ProductListComponent } from './features/http/product-list/product-list.component';
import { LoginComponent } from './features/auth/login/login.component';
import { UserIsloggedGuard } from './features/auth/user-is-logged.guard';
import { UserIsNotloggedGuard } from './features/auth/user-is-not-logged.guard';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { navRoutes } from './features/nav/routes';
import { SomeAnimateComponent } from './features/some-animate/some-animate.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [UserIsloggedGuard],
    children: [
      {
        path: "",
        redirectTo: "rxjs",
        pathMatch: "full"
      },
      {
        path: "rxjs",
        component: ShopComponent,
        canActivate: [UserIsloggedGuard],
        data: {animation: 'rxjs'}
      },
      {
        path: "form",
        component: FormCompComponent,
        canActivate: [UserIsloggedGuard],
        data: {animation: 'form'}
      },
      {
        path: "http",
        component: ProductListComponent,
        canActivate: [UserIsloggedGuard],
        data: {animation: 'http'}
      },
      {
        path: "some-animate",
        component: SomeAnimateComponent,
        canActivate: [UserIsloggedGuard],
        data: {animation: 'some-animate'}
      },
      ...navRoutes
      // {
      //   path: "navigation",
      //   loadChildren: () => import('./features/nav/navigation.module').then(m => m.NavigationModule)
      // }
    ]
  },
  {
    path: "auth",
    component: LoginComponent,
    canActivate: [UserIsNotloggedGuard]
  },
  // {
  //   path: "**", redirectTo: ""
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
