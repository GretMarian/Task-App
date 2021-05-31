import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/data/data';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Products;
  cartItem = [];
  total = 0;

  constructor(
    public sharedService: SharedService
  ) { }

  ngOnInit() {
    this.sharedService.total;
    this.cartItem = this.sharedService.getProductsCart();
  }
  
  removeItemFromCart(idx) {
    this.sharedService.removeItemFromCart(idx);
  }

  emptyCart() {
    this.sharedService. emptyCart();
  }

}
