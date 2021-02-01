import { CartCountService } from './features/cart-count-.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ShopModule } from './features/rxjs/shop.module';
import { HttpModule } from './features/http/http.module';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { FormCompModule } from './features/form-comp/form-comp.module';
import { AuthModule } from './features/auth/auth.module';
import { HomeModule } from './home/home.module';
import { NavigationModule } from './features/nav/navigation.module';
import { SomeAnimateComponent } from './features/some-animate/some-animate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SomeAnimateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ShopModule,
    HttpModule,
    FormCompModule,
    AuthModule,
    HomeModule,
    NavigationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
