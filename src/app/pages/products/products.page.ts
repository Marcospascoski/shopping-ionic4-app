import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Product } from './product'
import { ProductsService } from '../services/products.service';
import { FavouritesService   } from '../services/favourites.service';
import { CartService } from '../services/cart.service'
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

	descending: boolean = false;
  order: number;
  column: any = 'price';
  term;

  products: any;
  product: Product = new Product();

   constructor(private productsService: ProductsService,
               private favouritesService: FavouritesService,
               private cartService: CartService) {}

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productsService.getProductList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(products => {
      this.products = products;
    });
  }

  addToFavourites(product: Product) {
    this.favouritesService.addToFavouriteProduct(product);
  }

  addToCart(product: Product) {
    this.cartService.addToCartProduct(product);
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}

