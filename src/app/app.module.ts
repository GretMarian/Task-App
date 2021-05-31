import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { SharedService } from './services/shared.service';
import { ProductListComponent } from './components/product-list/product-list.component';



const appRoutes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
