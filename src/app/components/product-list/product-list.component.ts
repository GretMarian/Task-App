import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/data/data';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Products[];
  cartItem = [];

  constructor(
    public sharedService: SharedService
  ) { }

  ngOnInit() {
    this.products = this.sharedService.getProducts();
  }

  addToCart(idx) {
    this.sharedService.addToCart(idx);
    return false;
  }

}