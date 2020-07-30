import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './component/header/header-component/header-component.component';
import { FooterComponentComponent } from './component/footer/footer-component/footer-component.component';
import { CartComponent } from './component/home/cart/cart/cart.component';
import { ProductComponent } from './component/home/product/product/product.component';
import { HomeComponent } from './component/home/home/home/home.component';

import { ProductService } from "../app/service/product.service";
import { routing } from "../app/app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    CartComponent,
    ProductComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [ ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
