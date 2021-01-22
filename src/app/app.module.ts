import { CartCountService } from './features/cart-count-.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ShopModule } from './features/rxjs/shop.module';
import { FormCompComponent } from './features/form-comp/form-comp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from './features/http/http.module';

@NgModule({
  declarations: [
    AppComponent,
    FormCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ShopModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
