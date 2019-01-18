import { Component, OnInit } from '@angular/core';

import { Product } from '../products/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

	cartProducts: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCartProduct();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  onDeleteCart(product: Product) {
    this.cartService.removeLocalCart(product);

    this.getCartProduct();
  }

  getCartProduct() {
    this.cartProducts = this.cartService.getLocalCartProduct();
  }

}

