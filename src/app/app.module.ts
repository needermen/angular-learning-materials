import { CartCountService } from './features/cart-count-.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ShopModule } from './features/shop/shop.module';
import { FormCompComponent } from './form-comp/form-comp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WrapperComponent } from './wrapper/wrapper.component';
@NgModule({
  declarations: [
    AppComponent,
    FormCompComponent,
    WrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ShopModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
