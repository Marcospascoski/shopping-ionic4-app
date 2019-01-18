import { Component, OnInit } from '@angular/core';

import { Product } from '../products/product';
import { FavouritesService } from '../services/favourites.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

	favouriteProducts: Product[];

  constructor(private favouritesService: FavouritesService,
              public cartService: CartService) { }

  ngOnInit() {
    this.getFavouriteProduct();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
  }

  onDeleteFavourite(product: Product) {
    this.favouritesService.removeLocalFavourite(product);

    this.getFavouriteProduct();
  }

  getFavouriteProduct() {
    this.favouriteProducts = this.favouritesService.getLocalFavouriteProduct();
  }

  addToCart(product: Product) {
    this.cartService.addToCartProduct(product);
  }

}
