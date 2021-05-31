import { Injectable } from '@angular/core';
import { Products } from '../data/data';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  products: Products[];
  cartItem = [];
  total = 0;

  constructor() {
    this.products = [
      { id: 1, name: "article 1", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 25 },
      { id: 2, name: "article 2", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 35 },
      { id: 3, name: "article 3", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 45 }
    ]
   }

   getProducts() {
    return this.products;
  }

  getProductsCart() {
    const cartItem = JSON.parse(localStorage.getItem('cart'));
    if(cartItem) {
      this.cartItem = cartItem;
    }
    this.calcTotalPrice();
    return this.cartItem;
  }

  addToCart(idx) {
    this.cartItem.push(this.products.find(i => i.id === idx));
    localStorage.setItem('cart', JSON.stringify(this.cartItem));
  }

  removeItemFromCart(idx) {
    this.cartItem.splice(idx, 1); 
    this.calcTotalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartItem))
  }

  calcTotalPrice() {
    let total = 0;

    this.cartItem.forEach(item => {
      total += item.price;
    });

     this.total = total;
  }

  emptyCart() {
    this.cartItem.length = 0;
    this.calcTotalPrice();
    localStorage.clear();
  }

}